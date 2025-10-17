export const getProfile = async (req, res) => {
  try {
    const response = await fetch("https://catfact.ninja/fact");

    if (!response.ok) {
      throw new Error("Cat API returned error");
    }

    const data = await response.json();
    const catFact = data.fact;

    // return status code and object response
    res.status(200).json({
      status: "success",
      user: {
        email: "segdavid03@gmail.com",
        name: "Segun David",
        stack: "Node.js/ExpressJs",
      },
      timestamp: new Date().toISOString(),
      fact: catFact,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Failed to fetch cat fact",
    });
  }
};
