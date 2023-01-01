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

export const getSharkAttacksActivity = async (req, res) => {
  try {
    const {fields } = req.params
    const sharkAttack = await sharkAttack.findById("fields:surfing");

    if (sharkAttack) {
      return res.json(sharkAttack)
    }
    res.status(404).json({message: "activity not found!"});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message });
  }
};

export const updateSharkAttackActivity = async (req, res) => {
  try {
    const {type} = req.params;
    const sharkAttack  = await SharkAttack.findMany("fields:type", "Unprovoked");
    
    res.status(201).json(sharkAttack);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message
    });
  }
};

export const getSharkDate = async (req, res) => {
  try {
    const { Date } = req.params;
    const attacks = await attacks.findOne("fields:date", "1970");
    res.json(attacks)
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message
    })
  }
};

