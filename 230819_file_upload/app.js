const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");

const uploadDetail = multer({
  dest: "uploads/",
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
// body - parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/uploads", uploadDetail.single("userfile"), function (req, res) {
  console.log(req.file);
  console.log(req.body);
  res.send("Upload!!");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
