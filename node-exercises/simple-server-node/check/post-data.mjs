import fetch from "isomorphic-fetch";

const postData = async (req, res, next) => {
  try {
    const payload = await fetch("https://reqres.in/api/users?page=2");
    const json = await payload.json();
    res.writeHead(200, { "Content-Type": "text/json" });
    res.write(
      JSON.stringify({
        message: "fetched data successfully",
        data: json,
      })
    );
    res.end();
  } catch (error) {
    res.writeHead(400);
    res.write(
      JSON.stringify({
        message: error,
      })
    );
    res.end();
  }
};

export default postData;
