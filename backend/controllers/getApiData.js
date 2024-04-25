const { default: mongoose } = require("mongoose");
// const FoodItems = require("../models/FoodItems");

exports.getApiData = async (req, res) => {
    try {
        const response = await mongoose.connection.db.collection("Mars_Rovers").find({}).toArray();
        res.status(200).json(response
            // {

            //     success: true,
            //     data: response,
            //     message: 'Entire FoodItems data is fetched'
            // }
        );
    }
    catch (err) {
        console.error(err);
        res.status(500)
            .json({
                success: false,
                data: " server error",
                message: err.message,
            })
    }
}
