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

// Create the function for generating a new record in the database
export const createSharkAttackRecord = async (req, res) => {
    try {
        const sharkAttack = new attacks(req.body)
        await sharkAttack.save()
        res.status(201).json(sharkAttack)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
}

// Update the naming convention based on the change to Project/routes/sharkattack.js and update functionality of findOne() to findByIdAndUpdate()
export const updateSharkAttackRecord = async (req, res) => {
  try {
    const { id } = req.params
    const sharkAttack  = await attacks.findByIdAndUpdate(id, req.body);

    res.status(201).json(sharkAttack);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Update the naming convention based on the change to Project/routes/sharkattack.js and update the functionality of findOne() to findOneAndDelete()
export const deleteSharkAttackRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const attackDeleted = await attacks.findOneAndDelete(id);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message })
  }
};

