const mongoose = require("mongoose");

const receiptSchema = new mongoose.Schema({
  date: Number,
  description: String,
  debitDR: Number,
  creditsCR: Number,
  balance: Number,
  currentRate: Number,
  closingBalance: Number,
  receitNumber: Number,
});

const Receipt = mongoose.model("Receipt", receiptSchema);

// Function to fetch data from MongoDB using Mongoose
const fetchData = async () => {
  try {
    // Connect to your MongoDB database
    await mongoose.connect(
      "mongodb+srv://onyinjo:Omoka2023@cluster0.rmr6rxq.mongodb.net/"
    );

    Receipt.create({
      date: 122232,
      description: "none",
      debitDR: 123,
      creditsCR: 456,
      balance: 2894,
      currentRate: 786,
      closingBalance: 1020,
      receitNumber: 234,
    });

    // Fetch data using your Mongoose model
    const data = await Receipt.find({}); //

    // Close the connection
    await mongoose.connection.close();

    return data;
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
    return null;
  }
};

fetchData();

module.exports = fetchData;
