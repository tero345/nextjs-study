export default (req, res) => {
    res.statusCode = 200;
    // 쿠키 전달
    res.json({ name: req.cookies.a_name });
  };