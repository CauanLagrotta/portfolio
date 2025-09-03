"use client";

import * as motion from "motion/react-client";
import {
  WhatsappLogoIcon,
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";
import { AuroraText } from "@/components/magicui/aurora-text";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import { req } from "@/lib/axios";
import { InputMask } from "@react-input/mask";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  phone: Yup.string().required("Telefone é obrigatório"),
  subject: Yup.string().required("Assunto é obrigatório"),
  message: Yup.string()
    .max(500, "A mensagem deve ter no máximo 500 caracteres")
    .required("Mensagem é obrigatória"),
});

interface MailSenderProps {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (
    { name, email, phone, subject, message }: MailSenderProps,
    { resetForm }: { resetForm: () => void }
  ) => {
    setLoading(true);
    try {
      const result = await req.post("/api/contact", {
        name,
        email,
        phone,
        subject,
        message,
      });

      if (result.status === 200) {
        toast.success("Contato enviado com sucesso!", { theme: "colored" });
        resetForm();
      }

      return result;
    } catch (err) {
      toast.error("Contato não enviado. Tente nos canais abaixo.", {
        theme: "colored",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center pt-30 px-4 py-10 md:px-20 md:pt-30 z-10 w-full">
      {loading ? (
        <Box className="h-full w-full bg-black/5 flex justify-center items-center">
          <CircularProgress />
        </Box>
      ) : (
        <>
          <AuroraText
            colors={["#1f68c7", "#991ee0"]}
            className="text-5xl font-extrabold text-sky-600 mb-8"
          >
            Contato
          </AuroraText>

          <div className="font-bold text-center text-gray-300 text-lg max-w-2xl">
            Tem um projeto em mente? Está procurando um desenvolvedor? Ou
            simplesmente quer trocar uma ideia sobre tecnologia? Entre em
            contato!
          </div>

          <div className="flex flex-col gap-6 w-full">
            <Formik
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              initialValues={{
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
              }}
            >
              {({ errors, touched, values }) => (
                <Form className="w-full p-5 bg-gray-900 text-white rounded-xl mt-10">
                  <div className="lg:grid lg:grid-cols-2 gap-3">
                    <div className="mb-4">
                      <label
                        className={`block text-sm font-medium mb-1 ${
                          touched.name && errors.name
                            ? "text-red-500"
                            : "text-gray-300"
                        }`}
                        htmlFor="name"
                      >
                        Nome Completo*
                      </label>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Digite seu nome..."
                        className={`w-full p-2 rounded-md bg-gray-800 border ${
                          touched.name && errors.name
                            ? "border-red-500"
                            : "border-gray-700"
                        } text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        className={`block text-sm font-medium mb-1 ${
                          touched.email && errors.email
                            ? "text-red-500"
                            : "text-gray-300"
                        }`}
                        htmlFor="email"
                      >
                        E-mail*
                      </label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Digite seu email..."
                        className={`w-full p-2 rounded-md bg-gray-800 border ${
                          touched.email && errors.email
                            ? "border-red-500"
                            : "border-gray-700"
                        } text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>
                  <div className="lg:grid lg:grid-cols-2 gap-3">
                    <div className="mb-4">
                      <label
                        className={`block text-sm font-medium mb-1 ${
                          touched.phone && errors.phone
                            ? "text-red-500"
                            : "text-gray-300"
                        }`}
                        htmlFor="phone"
                      >
                        Telefone*
                      </label>
                      <Field
                        name="phone"
                        as={InputMask}
                        mask="+55(__)_____-____"
                      >
                        {({ field }: any) => (
                          <InputMask
                            {...field}
                            mask="+55(__)_____-____"
                            replacement={{ _: /\d/ }}
                            type="text"
                            name="phone"
                            placeholder="Digite seu telefone..."
                            className={`w-full p-2 rounded-md bg-gray-800 border ${
                              touched.phone && errors.phone
                                ? "border-red-500"
                                : "border-gray-700"
                            } text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                          />
                        )}
                      </Field>
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        className={`block text-sm font-medium mb-1 ${
                          touched.subject && errors.subject
                            ? "text-red-500"
                            : "text-gray-300"
                        }`}
                        htmlFor="subject"
                      >
                        Assunto*
                      </label>
                      <Field
                        type="text"
                        name="subject"
                        placeholder="Digite o assunto..."
                        className={`w-full p-2 rounded-md bg-gray-800 border ${
                          touched.subject && errors.subject
                            ? "border-red-500"
                            : "border-gray-700"
                        } text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                      <ErrorMessage
                        name="subject"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      className={`block text-sm font-medium mb-1 ${
                        touched.message && errors.message
                          ? "text-red-500"
                          : "text-gray-300"
                      }`}
                      htmlFor="message"
                    >
                      Mensagem*
                    </label>
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="Digite uma breve mensagem..."
                      className={`w-full p-2 rounded-md bg-gray-800 border ${
                        touched.message && errors.message
                          ? "border-red-500"
                          : "border-gray-700"
                      } text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-y`}
                    />
                    <div className="text-gray-400 text-sm mt-1">
                      {values.message.length} / 500
                    </div>
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <button
                    type="submit"
                    className={`${
                      errors.message
                        ? "cursor-not-allowed bg-blue-900 hover:bg-blue-900"
                        : ""
                    } w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200`}
                  >
                    Enviar
                  </button>
                </Form>
              )}
            </Formik>

            <div className="w-full flex items-center justify-center">
              <span className="w-[50%] border-t-2 border-gray-700" />
              <p className="px-5">ou</p>
              <span className="w-[50%] border-t-2 border-gray-700" />
            </div>

            <motion.div className="grid grid-cols-2 font-bold sm:flex gap-10 sm:items-center sm:justify-center">
              <a
                href="https://github.com/CauanLagrotta"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500 transition-all duration-200 flex flex-col items-center"
              >
                <GithubLogoIcon size={32} />
                <p>Github</p>
              </a>
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&to=cauanlagrotta.dev@gmail.com&tf=cm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-800 transition-all duration-200 flex flex-col items-center"
              >
                <EnvelopeSimpleIcon size={32} />
                <p>Email</p>
              </a>
              <a
                href="https://wa.me/5532998552418?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800 transition-all duration-200 flex flex-col items-center"
              >
                <WhatsappLogoIcon size={32} />
                <p>Whatsapp</p>
              </a>
              <a
                href="https://www.linkedin.com/in/cauan-silva-lagrotta/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-all duration-200 flex flex-col items-center"
              >
                <LinkedinLogoIcon size={32} />
                <p>LinkedIn</p>
              </a>
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
}
