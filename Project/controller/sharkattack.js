import attacks from "../models/attack.js"

export const getSharkAttacks = async (req, res) => {
  try {
    const sharkAttacks = await attacks.find();
    res.json(sharkAttacks);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message
    })
  }
};

export const getSharkAttackByActivity = async (req, res) => {
  try {
    const { activity } = req.params
    const sharkAttak = await attacks.find({"field:activity": activity});

    if (sharkAttak) {
      return res.json(sharkAttak)
    }
    res.status(404).json({message: "activity not found!"});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message });
  }
};

export const updateSharkAttackgreatWhite = async (req, res) => {
  try {
    const {species} = req.params;
    const attacks  = await attacks.updateMany("field:species","greatwhite");
    
    res.status(201).json(attacks);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message
    });
  }
};

export const getSharkDate = async (req, res) => {
  try {
    const { sharkAttackDate  } = req.params;
    const attacks = await attacks.find("field:date");
    res.json(attacks)
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message
    })
  }
};

export const deletejury = async (req, res) => {
  try {
    const {injuries } = req.params;
    const attacks = await attacks.deleteMany("fatal_y_n:N,Nq");

    if (deleted) {
      return res.status(200).send("injuries are deleted!")
    }

    throw new Error("injuries not found!")
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message});
  }
};