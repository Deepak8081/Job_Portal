import { Company } from "../models/company.model.js";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

export const registerCompany = async (req, res) => {
    try {
        const { companyName } = req.body;
        if (!companyName) {
            return res.status(400).json({
                message: "Company name is required.",
                success: false
            });
        }
        let company = await Company.findOne({ name: companyName });
        if (company) {
            return res.status(400).json({
                message: "You can't register same company.",
                success: false
            })
        };
        company = await Company.create({
            name: companyName,
            userId: req.id
        });

        return res.status(201).json({
            message: "Company registered successfully.",
            company,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
export const getCompany = async (req, res) => {
    try {
        const userId = req.id; // logged in user id
        const companies = await Company.find({ userId });
        if (!companies) {
            return res.status(404).json({
                message: "Companies not found.",
                success: false
            })
        }
        return res.status(200).json({
            companies,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}
// get company by id
export const getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId);
        if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            })
        }
        return res.status(200).json({
            company,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
// export const updateCompany = async (req, res) => {
//     try {
//         const { name, description, website, location } = req.body;
 
//         const file = req.file;
//         // idhar cloudinary ayega
//         const fileUri = getDataUri(file);
//         const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
//         const logo = cloudResponse.secure_url;
    
//         const updateData = { name, description, website, location, logo };

//         const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true });

//         if (!company) {
//             return res.status(404).json({
//                 message: "Company not found.",
//                 success: false
//             })
//         }
//         return res.status(200).json({
//             message:"Company information updated.",
//             success:true
//         })

//     } catch (error) {
//         console.log(error);
//     }
// }
export const updateCompany = async (req, res) => {
    try {
        const { name, description, website, location } = req.body;
        let logo;

        const file = req.file;

        if (file) {
            // Image is uploaded, process it
            const fileUri = getDataUri(file);
            const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
            logo = cloudResponse.secure_url;
        } else {
            // No image uploaded, use a default logo
            logo = "data:image/png;base64,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";
        }

        const updateData = { name, description, website, location, logo };

        const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            });
        }

        return res.status(200).json({
            message: "Company information updated.",
            success: true
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server error while updating company.",
            success: false
        });
    }
};
