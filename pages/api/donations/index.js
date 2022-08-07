import dbConnect from "../../../lib/dbConnect";
import Donation from "../../../models/Donation";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const donations = await Donation.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: donations });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        // const { donation, ...donation } = req.body

        // const newDonation = await Donation.create(
        //   donation
        // )
        // const newDonation = await Donation.create(
        //   donation
        // )
        const donation = await Donation.create(req.body);
        /* create a new model in the database */

        // console.log({ newDonation })
        // console.log({ newDonation })

        // Map over each donation and create a donation.
        // const newDonation = await Donation.create({ ...donation, donationId: donation._id });

        // console.log({ donation });
        res.status(201).json({ success: true, data: donation });
        // res.status(201).json({ success: true, data: { ...newDonation, donation: {} } })
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
