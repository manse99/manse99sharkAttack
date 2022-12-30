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
    const sharkAttck = await attacks.find({"field:activity": activity});
    res.json(sharkAttck);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message
    })
  }
};

export const getSharkAttackgreatWhite = async (req, res) => {
  try {
    const {greatWhite} = req.params;
    const attacks  = await attacks.find("field:species").where("great white")
    res.json(attacks);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message
    });
  }
};

export const getSharkDate = async (req, res) => {
  try {
    const { sharkAttack  } = req.params;
    const attacks = await attacks.find("field:date");
    res.json(attacks)
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message
    })
  }
};

export const getInjury = async (req, res) => {
  try {
    const { sharkAttack } = req.params;
    const attacks = await attacks.find("fatal_y_n:enum:N,Nq")
    res.status(201).json(attacks)
  } catch {
    res.status(500).json({
      error: error.message
    })
  }
};