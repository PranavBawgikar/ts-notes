import { z } from "zod";

const form = document.querySelector<HTMLFormElement>("#form")
const nameInput = document.querySelector<HTMLInputElement>("#name")
const emailInput = document.querySelector<HTMLInputElement>("#email")
const phoneNumInput = document.querySelector<HTMLInputElement>("#phone")
const password = document.querySelector<HTMLInputElement>("#password")
const cpassword = document.querySelector<HTMLInputElement>("#cpassword")
const nameError = document.querySelector<HTMLDivElement>("#name-error")!
const emailError = document.querySelector<HTMLDivElement>("#email-error")!
const phoneError = document.querySelector<HTMLDivElement>("#phone-error")!
const passError = document.querySelector<HTMLDivElement>("#pass-error")!
const cPassError = document.querySelector<HTMLDivElement>("#cpass-error")!
 

//Defining the schema for user registration using Zod
const registrationSchema = z.object({
     name: z.string().min(2),
     email: z.string().email(),
     phoneNum: z.number().min(10),
     password: z.string().min(8),
     confirmPassword: z.string().min(8),
   });

form?.addEventListener("submit", e => {
    e.preventDefault()

    const formData = {
        name: nameInput?.value,
        email: emailInput?.value,
        phoneNum: phoneNumInput?.valueAsNumber,
        password: password?.value,
        confirmPassword: cpassword?.value
    }

    const results = registrationSchema.safeParse(formData)
    if(!results.success){
        const formattedErrors = results.error.format()
        nameError.textContent = formattedErrors.name?._errors.join(", ") || ""
        emailError.textContent = formattedErrors.email?._errors.join(", ") || ""
        phoneError.textContent = formattedErrors.phoneNum?._errors.join(", ") || ""
        passError.textContent = formattedErrors.password?._errors.join(", ") || ""
        cPassError.textContent = formattedErrors.confirmPassword?._errors.join(", ") || ""
    } else {
        nameError.textContent = ""
        emailError.textContent = ""
        phoneError.textContent = ""
        passError.textContent = ""
        cPassError.textContent = ""
    }
})

export {}
