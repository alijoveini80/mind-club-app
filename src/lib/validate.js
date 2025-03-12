// lib/validate.js
import crypto from "crypto";

export function validateInitData(initData) {
  try {
    let errorMsg = "";
    const decodedStr = decodeURIComponent(initData);
    const params = new URLSearchParams(decodedStr);
    const hash = params.get("hash");
    const authDate = params.get("auth_date");

    if (!hash || !authDate) {
      errorMsg = "hash or auth_date not found";
      console.log(errorMsg);
      return false;
    }

    // Create dataCheckString: sort keys (excluding 'hash') and join with '\n'
    const dataCheckString = [...params.entries()]
      .filter(([key]) => key !== "hash")
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, value]) => `${key}=${value}`)
      .join("\n");

    // Generate the secret key using HMAC-SHA256 with BOT_TOKEN
    const secretKey = crypto
      .createHmac("sha256", Buffer.from("WebAppData"))
      .update(process.env.BOT_TOKEN)
      .digest();

    // Calculate the hash
    const calculatedHash = crypto
      .createHmac("sha256", secretKey)
      .update(dataCheckString)
      .digest("hex");

    // console.log("validation return value:");
    // console.log(Object.fromEntries(params));

    // Prevent validation outdated {authDate}
    // 24 hours: 86400 seconds
    const now = Math.floor(Date.now() / 1000);

    if (authDate && now - authDate > 120) {
      // 2 minutes
      console.log("now - authDate :", now - authDate);
      errorMsg = "auth_date has been outdated";
      console.log(errorMsg);
      return false;
    }

    return calculatedHash === hash ? true : false;
    // return calculatedHash === parsedData.hash ? parsedData : false;

    // Securely compare hashes
    // return crypto.timingSafeEqual(
    //   Buffer.from(calculatedHash, "hex"),
    //   Buffer.from(hash, "hex")
    // ) ? (
    //   Object.fromEntries(params)
    // ) : (
    //   <div>not match</div>
    // );
  } catch (err) {
    console.log("Error validating initData:", err);
    return { err: err };
  }
}
