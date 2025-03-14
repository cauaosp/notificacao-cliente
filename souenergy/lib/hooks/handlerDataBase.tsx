// // import db from "@/lib/db"; // Conexão com o banco de dados
// import { NextApiRequest, NextApiResponse } from "next";

// export const hadlerDataBase = async (
//   req: NextApiRequest,
//   res: NextApiResponse
// ) => {
//   if (req.method === "POST") {
//     const { userId } = JSON.parse(req.body);

//     await db.user.update({
//       where: { id: userId },
//       data: { acceptedTerms: true },
//     });

//     return res.status(200).json({ message: "Termos aceitos com sucesso!" });
//   }

//   res.status(405).json({ error: "Método não permitido" });
// };
