import dbConnect from "../../../lib/dbConnect";
import Donation from "../../../models/Donation";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const donation = await Donation.findById(id);
        if (!donation) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: donation });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        const donation = await Donation.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!donation) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: donation });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedDonation = await Donation.deleteOne({ _id: id });
        if (!deletedDonation) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
