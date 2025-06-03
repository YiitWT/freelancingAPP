import "dotenv/config";

export const config = {
  port: 3000,
  jwtSecret: "secret",
  db: {
    host: "mongodb+srv://yiit:Alohamora@cluster0.6ccnu2g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  },
};
