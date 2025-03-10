// lib/validate.js
import crypto from "crypto";

export function validateInitData(initData) {
  try {
    const params = new URLSearchParams(initData);
    const hash = params.get("hash");

    if (!hash) return <div>hash not found</div>;

    // Create dataCheckString: sort keys (excluding 'hash') and join with '\n'
    const dataCheckString = [...params.entries()]
      .filter(([key]) => key !== "hash")
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, value]) => `${key}=${value}`)
      .join("\n");

    // Generate the secret key using HMAC-SHA256 with BOT_TOKEN
    const secretKey = crypto
      .createHmac("sha256", Buffer.from("WebAppData"))
      .update("BaleToken")
      .digest();

    // Calculate the hash
    const calculatedHash = crypto
      .createHmac("sha256", secretKey)
      .update(dataCheckString)
      .digest("hex");

    console.log("validation return value:");
    console.log(Object.fromEntries(params));
    return calculatedHash === parsedData.hash ? parsedData : false;
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
    console.error("Error validating initData:", err);
    return { err: err };
  }
}
