import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.BREVO_SMTP,
      port: Number(process.env.BREVO_PORT),
      secure: false,
      auth: {
        user: process.env.BREVO_LOGIN,
        pass: process.env.BREVO_PASSWORD,
      },
    });

    await transporter.verify();

    const mailOptions = {
      from: "cauanlagrotta.dev@gmail.com",
      to: "cauanlagrotta.dev@gmail.com",
      subject,
      html: `<!--
* This email was built using Tabular.
* For more information, visit https://tabular.email
-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
<title></title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<!--[if !mso]>-->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!--<![endif]-->
<meta name="x-apple-disable-message-reformatting" content="" />
<meta content="target-densitydpi=device-dpi" name="viewport" />
<meta content="true" name="HandheldFriendly" />
<meta content="width=device-width" name="viewport" />
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
<style type="text/css">
table {
border-collapse: separate;
table-layout: fixed;
mso-table-lspace: 0pt;
mso-table-rspace: 0pt
}
table td {
border-collapse: collapse
}
.ExternalClass {
width: 100%
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
line-height: 100%
}
body, a, li, p, h1, h2, h3 {
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-text-size-adjust: none !important
}
body {
min-width: 100%;
Margin: 0px;
padding: 0px;
}
body, #innerTable {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale
}
#innerTable img+div {
display: none;
display: none !important
}
img {
Margin: 0;
padding: 0;
-ms-interpolation-mode: bicubic
}
h1, h2, h3, p, a {
line-height: inherit;
overflow-wrap: normal;
white-space: normal;
word-break: break-word
}
a {
text-decoration: none
}
h1, h2, h3, p {
min-width: 100%!important;
width: 100%!important;
max-width: 100%!important;
display: inline-block!important;
border: 0;
padding: 0;
margin: 0
}
a[x-apple-data-detectors] {
color: inherit !important;
text-decoration: none !important;
font-size: inherit !important;
font-family: inherit !important;
font-weight: inherit !important;
line-height: inherit !important
}
u + #body a {
color: inherit;
text-decoration: none;
font-size: inherit;
font-family: inherit;
font-weight: inherit;
line-height: inherit;
}
a[href^="mailto"],
a[href^="tel"],
a[href^="sms"] {
color: inherit;
text-decoration: none
}
</style>
<style type="text/css">
@media (min-width: 481px) {
.hd { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.hm { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.t13,.t27,.t32,.t46,.t50,.t9{vertical-align:middle!important}.t78,.t80{max-width:398px!important}.t14,.t33,.t51{text-align:center!important}.t25,.t44,.t7{display:revert!important}.t27,.t46,.t9{width:auto!important;max-width:100%!important}.t13{width:133px!important}.t50{width:116px!important}.t32{width:136px!important}
}
</style>
<!--[if !mso]>-->
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@500&amp;family=Lato:wght@400;700&amp;family=Roboto:wght@400;700&amp;family=DM+Sans:wght@500&amp;display=swap" rel="stylesheet" type="text/css" />
<!--<![endif]-->
<!--[if mso]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>
<body id="body" class="t97" style="min-width:100%;Margin:0px;padding:0px;background-color:#FFFFFF;"><div class="t96" style="background-color:#FFFFFF;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t95" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#FFFFFF;" valign="top" align="center">
<!--[if mso]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill color="#FFFFFF"/>
</v:background>
<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td align="center">
<table class="t94" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t93" style="width:600px;">
<table class="t92" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t91" style="padding:32px 20px 32px 20px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t84" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t83" style="width:500px;">
<table class="t82" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t81" style="border:1px solid #DADCE0;overflow:hidden;padding:40px 20px 29px 20px;border-radius:8px 8px 8px 8px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t63" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="458" class="t62" style="width:600px;">
<table class="t61" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t60" style="border-bottom:1px solid #DADCE0;padding:0 0 10px 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t4" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="458" class="t3" style="width:600px;">
<table class="t2" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t1"><h1 class="t0" style="margin:0;Margin:0;font-family:DM Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:34px;font-weight:500;font-style:normal;font-size:24px;text-decoration:none;text-transform:none;letter-spacing:-0.8px;direction:ltr;color:#333333;text-align:center;mso-line-height-rule:exactly;mso-text-raise:3px;">Novo contato feito pelo formul&aacute;rio do portf&oacute;lio</h1></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t18" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t22" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="458" class="t21" style="width:600px;">
<table class="t20" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t19"><div class="t17" style="width:100%;text-align:center;"><div class="t16" style="display:inline-block;"><table class="t15" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="middle">
<tr class="t14"><td></td><td class="t9" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t8" style="width:auto;"><tr><td class="t6"><p class="t5" style="margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:20px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;direction:ltr;color:#415BF0;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Nome:</p></td><td class="t7" style="width:10px;" width="10"></td></tr></table>
</td><td class="t13" width="133" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t12" style="width:100%;"><tr><td class="t11"><p class="t10" style="margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:20px;font-weight:400;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">${name}</p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t37" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t41" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="458" class="t40" style="width:600px;">
<table class="t39" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t38"><div class="t36" style="width:100%;text-align:center;"><div class="t35" style="display:inline-block;"><table class="t34" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="middle">
<tr class="t33"><td></td><td class="t27" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t26" style="width:auto;"><tr><td class="t24"><p class="t23" style="margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:20px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;direction:ltr;color:#415BF0;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Email:</p></td><td class="t25" style="width:10px;" width="10"></td></tr></table>
</td><td class="t32" width="136" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t31" style="width:100%;"><tr><td class="t30"><p class="t29" style="margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:20px;font-weight:400;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;"><span class="t28" style="margin:0;Margin:0;mso-line-height-rule:exactly;">${email}</span></p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t55" style="mso-line-height-rule:exactly;mso-line-height-alt:10px;line-height:10px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t59" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="458" class="t58" style="width:600px;">
<table class="t57" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t56"><div class="t54" style="width:100%;text-align:center;"><div class="t53" style="display:inline-block;"><table class="t52" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="middle">
<tr class="t51"><td></td><td class="t46" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t45" style="width:auto;"><tr><td class="t43"><p class="t42" style="margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:20px;font-weight:700;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;direction:ltr;color:#415BF0;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Telefone:</p></td><td class="t44" style="width:10px;" width="10"></td></tr></table>
</td><td class="t50" width="116" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t49" style="width:100%;"><tr><td class="t48"><p class="t47" style="margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:20px;font-weight:400;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">${phone}</p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t64" style="mso-line-height-rule:exactly;mso-line-height-alt:24px;line-height:24px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t69" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="430" class="t68" style="width:430px;">
<table class="t67" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t66"><p class="t65" style="margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:700;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#415BF0;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;">Mensagem:</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t74" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="430" class="t73" style="width:430px;">
<table class="t72" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t71"><p class="t70" style="margin:0;Margin:0;font-family:Lato,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;">${message}</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t76" style="mso-line-height-rule:exactly;mso-line-height-alt:32px;line-height:32px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t80" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;max-width:458px;"><tr><td class="t79" style="width:auto;">
<table class="t78" role="presentation" cellpadding="0" cellspacing="0" style="width:auto;max-width:458px;"><tr><td class="t77" style="overflow:hidden;background-color:#068504;text-align:center;line-height:16px;mso-line-height-rule:exactly;mso-text-raise:1px;padding:10px 24px 10px 24px;border-radius:10px 10px 10px 10px;"><span class="t75" style="display:block;margin:0;Margin:0;font-family:Work Sans,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:16px;font-weight:500;font-style:normal;font-size:14px;text-decoration:none;letter-spacing:-0.5px;direction:ltr;color:#FFFFFF;text-align:center;mso-line-height-rule:exactly;mso-text-raise:1px;"><a href="https://wa.me/${phone}?text=Oi,%20tudo%20bem?">Ir para WhatsApp</a></span></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t86" style="mso-line-height-rule:exactly;mso-line-height-alt:12px;line-height:12px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t90" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="500" class="t89" style="width:500px;">
<table class="t88" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t87"><p class="t85" style="margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:18px;font-weight:400;font-style:normal;font-size:11px;text-decoration:none;text-transform:none;direction:ltr;color:#7A7A7A;text-align:center;mso-line-height-rule:exactly;mso-text-raise:2px;">&copy; 2025 Cauan Lagrotta. Juiz de Fora, Minas Gerais, Brasil</p></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table></div><div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>
</html>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email enviado!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Erro ao enviar email" },
      { status: 500 }
    );
  }
}
