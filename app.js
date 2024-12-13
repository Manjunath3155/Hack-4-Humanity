const express = require("express");
const path = require("path");
const courseRouter = require("./routes/courses");
const jobsRouter = require("./routes/jobs");


const app = express();
const PORT = 4000;


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'Main.html'))
})

app.get("/aboutus", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/aboutus.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/contact.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/login.html"));
});
app.get("/signup.html", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/signup.html"));
});

app.use(express.static(path.join(__dirname, "public/courses")));
app.use("/courses", courseRouter);

app.use(express.static(path.join(__dirname, "public/jobs")));
app.use("/jobs", jobsRouter);




    
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
