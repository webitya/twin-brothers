import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  console.warn("[db] Missing MONGODB_URI environment variable")
}

let cached = global._mongoose
if (!cached) cached = global._mongoose = { conn: null, promise: null }

export async function dbConnect() {
  if (cached.conn) return cached.conn
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: "massage_app",
      })
      .then((m) => m)
  }
  cached.conn = await cached.promise
  return cached.conn
}

export const connectDB = dbConnect
