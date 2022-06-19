export default (req, res) => {
    if (req.method === "POST") {
        // Max-Age : 1시간 쿠키 set
        res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=3600;HttpOnly,Secure");
        res.statusCode = 200;
        res.json({ message: "ok" });
      }  
}