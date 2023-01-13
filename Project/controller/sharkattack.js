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

export const getSharkAttack = async (req, res) => {
  try {
      const { id } = req.params
    const sharkAttack = await attacks.findById(id);
    res.json(sharkAttack);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message
    })
  }
};

export const getSharkAttacksActivity = async (req, res) => {
  try {
    const { activity } = req.params
    const sharkAttack = await attacks.find({"fields.activity": activity});

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
    const { Unprovoked } = req.params
    const sharkAttack  = await attacks.findOne({"fields.type": Unprovoked});
    
    res.status(201).json(sharkAttack);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getSharkDate = async (req, res) => {
  try {
    const { date } = req.params;
    const attacks = await attacks.findOne({"fields.date": date});
    res.json(attacks)
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message
    })
  }
};

