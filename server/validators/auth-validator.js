const { z } = require("zod");

const signinSchema = z.object({
    email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid Email address"})
    .min(3, { message: "Email must be at least of 3 chars." })
    .max(255, { message: "Email must not be more than 255 characters" }),
    password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be at least of 3 chars." })
    .max(1024, { message: "Password must not be more than 1024 characters" }),
});

const signupSchema = signinSchema.extend({
    username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 chars." })
    .max(255, { message: "Name must not be more than 255 characters" }),
    // email: z
    // .string({ required_error: "Email is required" })
    // .trim()
    // .email({ message: "Invalid Email address"})
    // .min(3, { message: "Email must be at least of 3 chars." })
    // .max(255, { message: "Email must not be more than 255 characters" }),
    phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(10, { message: "Phone no. must be at least of 10 chars." })
    .max(20, { message: "phone no. not be more than 20 characters" }),
    // password: z
    // .string({ required_error: "Password is required" })
    // .min(7, { message: "Password must be at least of 7 chars." })
    // .max(1024, { message: "Password must not be more than 1024 characters" }),
});

module.exports = { signupSchema, signinSchema };