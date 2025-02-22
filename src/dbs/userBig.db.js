const complexUserData = [
  {
    name: "Juan Pérez",
    age: 32,
    email: "juan.perez@example.com",
    password: "clave123",
    role: "ROLE_USER",
    phoneNumber: "+34-123-456-789",
    address: "Calle de la Rosa, 123, Madrid",
    yearsOfExperience: "2010-05-15T23:00:00.000+00:00",
    specialization: ["64f4ff132d01b72514a6047b"],
    contacts: [],
    comments: [
      "64f5006abd7993e6751a5069",
      "64f5006abd7993e6751a506a",
      "64f5006abd7993e6751a506b",
    ],
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1693774031/proyecto%20final/usuarios/carpintero_o0o9nu.webp",
    favoriteCompany: [
      "64f1f81d21503000d6a9d392",
      "64f1f81d21503000d6a9d393",
      "64f1f81d21503000d6a9d394",
      "64f1f81d21503000d6a9d395",
    ],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "María García",
    age: 28,
    email: "maria.garcia@example.com",
    password: "contraseña456",
    role: "ROLE_USER",
    phoneNumber: "+34-234-567-890",
    address: "Avenida del Parque, 56, Barcelona",
    yearsOfExperience: "2012-09-10T23:00:00.000+00:00",
    specialization: ["64f4ff132d01b72514a6047b", "64f4ff132d01b72514a6047c"],
    contacts: [],
    comments: ["64f5006abd7993e6751a506c"],
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1693774031/proyecto%20final/usuarios/carpintero_o0o9nu.webp",
    favoriteCompany: [
      "64f1f81d21503000d6a9d392",
      "64f1f81d21503000d6a9d393",
      "64f1f81d21503000d6a9d394",
      "64f1f81d21503000d6a9d395",
    ],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Antonio Rodríguez",
    age: 35,
    email: "antonio.rodriguez@example.com",
    password: "clave_secreta789",
    role: "ROLE_USER",
    phoneNumber: "+34-345-678-901",
    address: "Calle del Sol, 78, Valencia",
    yearsOfExperience: "2015-04-22T23:00:00.000+00:00",
    specialization: ["64f4ff132d01b72514a60486"],
    contacts: [],
    comments: [],
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1693774027/proyecto%20final/usuarios/jardinero_sjq5sd.webp",
    favoriteCompany: [
      "64f1f81d21503000d6a9d392",
      "64f1f81d21503000d6a9d393",
      "64f1f81d21503000d6a9d394",
      "64f1f81d21503000d6a9d395",
    ],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Luisa Martínez",
    age: 29,
    email: "luisa.martinez@example.com",
    password: "contraseña1234",
    role: "ROLE_USER",
    phoneNumber: "+34-456-789-012",
    address: "Calle Mayor, 90, Sevilla",
    yearsOfExperience: "2018-06-18T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Manuel López",
    age: 40,
    email: "manuel.lopez@example.com",
    password: "clave_segura567",
    role: "ROLE_USER",
    phoneNumber: "+34-567-890-123",
    address: "Avenida de la Playa, 45, Alicante",
    yearsOfExperience: "2007-11-25T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Ana Sánchez",
    age: 36,
    email: "ana.sanchez@example.com",
    password: "password789",
    role: "ROLE_USER",
    phoneNumber: "+34-678-901-234",
    address: "Plaza del Ayuntamiento, 32, Madrid",
    yearsOfExperience: "2013-08-02T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "David Fernández",
    age: 33,
    email: "david.fernandez@example.com",
    password: "clave12345",
    role: "ROLE_USER",
    phoneNumber: "+34-789-012-345",
    address: "Calle de la Luna, 76, Barcelona",
    yearsOfExperience: "2011-03-30T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Sofía Ramírez",
    age: 31,
    email: "sofia.ramirez@example.com",
    password: "contraseña67890",
    role: "ROLE_USER",
    phoneNumber: "+34-890-123-456",
    address: "Avenida de la Paz, 98, Valencia",
    yearsOfExperience: "2016-07-11T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Javier Torres",
    age: 27,
    email: "javier.torres@example.com",
    password: "clave123456",
    role: "ROLE_USER",
    phoneNumber: "+34-901-234-567",
    address: "Calle de la Montaña, 25, Madrid",
    yearsOfExperience: "2019-10-05T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Laura González",
    age: 30,
    email: "laura.gonzalez@example.com",
    password: "password1234",
    role: "ROLE_USER",
    phoneNumber: "+34-123-456-789",
    address: "Avenida del Bosque, 70, Barcelona",
    yearsOfExperience: "2017-12-29T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Carlos Rodríguez",
    age: 35,
    email: "carlos.rodriguez@example.com",
    password: "contraseña5678",
    role: "ROLE_USER",
    phoneNumber: "+34-234-567-890",
    address: "Calle del Río, 15, Valencia",
    yearsOfExperience: "2014-04-17T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Marta López",
    age: 29,
    email: "marta.lopez@example.com",
    password: "clave78901",
    role: "ROLE_USER",
    phoneNumber: "+34-345-678-901",
    address: "Avenida del Mar, 5, Madrid",
    yearsOfExperience: "2018-02-14T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Pedro García",
    age: 32,
    email: "pedro.garcia@example.com",
    password: "password56789",
    role: "ROLE_USER",
    phoneNumber: "+34-456-789-012",
    address: "Calle de la Primavera, 85, Barcelona",
    yearsOfExperience: "2011-09-03T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Ana Pérez",
    age: 33,
    email: "ana.perez@example.com",
    password: "clave1234567",
    role: "ROLE_USER",
    phoneNumber: "+34-567-890-123",
    address: "Plaza de la Libertad, 37, Valencia",
    yearsOfExperience: "2010-08-22T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Daniel Martínez",
    age: 28,
    email: "daniel.martinez@example.com",
    password: "contraseña890123",
    role: "ROLE_USER",
    phoneNumber: "+34-678-901-234",
    address: "Calle del Pino, 47, Madrid",
    yearsOfExperience: "2012-11-10T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Sara Rodríguez",
    age: 31,
    email: "sara.rodriguez@example.com",
    password: "password1234567",
    role: "ROLE_USER",
    phoneNumber: "+34-901-234-567",
    address: "Avenida del Roble, 62, Barcelona",
    yearsOfExperience: "2015-06-05T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Jorge López",
    age: 29,
    email: "jorge.lopez@example.com",
    password: "clave12345678",
    role: "ROLE_USER",
    phoneNumber: "+34-123-456-789",
    address: "Calle del Olivo, 55, Valencia",
    yearsOfExperience: "2016-10-18T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Elena García",
    age: 34,
    email: "elena.garcia@example.com",
    password: "contraseña123456789",
    role: "ROLE_USER",
    phoneNumber: "+34-234-567-890",
    address: "Calle de la Rosa, 3, Madrid",
    yearsOfExperience: "2018-04-12T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Alejandro Martínez",
    age: 30,
    email: "alejandro.martinez@example.com",
    password: "clave1234567890",
    role: "ROLE_USER",
    phoneNumber: "+34-345-678-901",
    address: "Avenida de la Luna, 29, Barcelona",
    yearsOfExperience: "2017-07-22T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Mónica Sánchez",
    age: 27,
    email: "monica.sanchez@example.com",
    password: "password12345678901",
    role: "ROLE_USER",
    phoneNumber: "+34-456-789-012",
    address: "Plaza del Sol, 75, Valencia",
    yearsOfExperience: "2019-09-07T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Raúl Torres",
    age: 35,
    email: "raul.torres@example.com",
    password: "contraseña123456789012",
    role: "ROLE_USER",
    phoneNumber: "+34-567-890-123",
    address: "Calle Mayor, 57, Madrid",
    yearsOfExperience: "2014-01-28T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Lucía González",
    age: 32,
    email: "lucia.gonzalez@example.com",
    password: "clave1234567890123",
    role: "ROLE_USER",
    phoneNumber: "+34-678-901-234",
    address: "Avenida de la Playa, 12, Barcelona",
    yearsOfExperience: "2013-03-19T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Andrés Pérez",
    age: 28,
    email: "andres.perez@example.com",
    password: "password12345678901234",
    role: "ROLE_USER",
    phoneNumber: "+34-901-234-567",
    address: "Calle de la Montaña, 8, Valencia",
    yearsOfExperience: "2016-05-02T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Natalia Martínez",
    age: 29,
    email: "natalia.martinez@example.com",
    password: "contraseña123456789012345",
    role: "ROLE_USER",
    phoneNumber: "+34-123-456-789",
    address: "Plaza de la Libertad, 20, Madrid",
    yearsOfExperience: "2015-11-14T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Roberto López",
    age: 30,
    email: "roberto.lopez@example.com",
    password: "clave1234567890123456",
    role: "ROLE_USER",
    phoneNumber: "+34-234-567-890",
    address: "Avenida de la Paz, 7, Barcelona",
    yearsOfExperience: "2019-02-25T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Carmen Rodríguez",
    age: 31,
    email: "carmen.rodriguez@example.com",
    password: "password12345678901234567",
    role: "ROLE_USER",
    phoneNumber: "+34-345-678-901",
    address: "Calle del Roble, 92, Valencia",
    yearsOfExperience: "2018-10-12T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "José Martínez",
    age: 28,
    email: "jose.martinez@example.com",
    password: "clave123456789012345678",
    role: "ROLE_USER",
    phoneNumber: "+34-456-789-012",
    address: "Avenida del Sol, 32, Madrid",
    yearsOfExperience: "2017-06-28T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Isabel Sánchez",
    age: 34,
    email: "isabel.sanchez@example.com",
    password: "contraseña1234567890123456789",
    role: "ROLE_USER",
    phoneNumber: "+34-567-890-123",
    address: "Calle Mayor, 64, Barcelona",
    yearsOfExperience: "2016-04-04T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Pablo Torres",
    age: 29,
    email: "pablo.torres@example.com",
    password: "password12345678901234567890",
    role: "ROLE_USER",
    phoneNumber: "+34-901-234-567",
    address: "Avenida de la Montaña, 11, Valencia",
    yearsOfExperience: "2015-09-17T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Cristina García",
    age: 28,
    email: "cristina.garcia@example.com",
    password: "clave123456789012345678901",
    role: "ROLE_USER",
    phoneNumber: "+34-678-901-234",
    address: "Calle del Pino, 41, Madrid",
    yearsOfExperience: "2014-12-08T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Héctor Rodríguez",
    age: 35,
    email: "hector.rodriguez@example.com",
    password: "password1234567890123456789012",
    role: "ROLE_USER",
    phoneNumber: "+34-345-678-901",
    address: "Avenida de la Luna, 73, Barcelona",
    yearsOfExperience: "2013-03-03T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Lorena Martínez",
    age: 31,
    email: "lorena.martinez@example.com",
    password: "contraseña12345678901234567890123",
    role: "ROLE_USER",
    phoneNumber: "+34-123-456-789",
    address: "Plaza de la Libertad, 45, Madrid",
    yearsOfExperience: "2011-10-22T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Diego López",
    age: 29,
    email: "diego.lopez@example.com",
    password: "clave123456789012345678901234",
    role: "ROLE_USER",
    phoneNumber: "+34-234-567-890",
    address: "Calle del Roble, 54, Valencia",
    yearsOfExperience: "2010-09-18T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Alicia García",
    age: 33,
    email: "alicia.garcia@example.com",
    password: "password1234567890123456789012345",
    role: "ROLE_USER",
    phoneNumber: "+34-567-890-123",
    address: "Avenida del Sol, 23, Barcelona",
    yearsOfExperience: "2017-01-12T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Roberto Sánchez",
    age: 28,
    email: "roberto.sanchez@example.com",
    password: "clave12345678901234567890123456",
    role: "ROLE_USER",
    phoneNumber: "+34-901-234-567",
    address: "Calle Mayor, 80, Valencia",
    yearsOfExperience: "2015-05-07T23:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "",
    favoriteCompany: [],
    availability: ["De lunes a viernes, de 9:00 a 18:00"],
    salary: 9,
  },
  {
    name: "Construcciones Martínez",
    age: 42,
    email: "info@construccionesmartinez.com",
    password: "password123",
    phoneNumber: "+34-934-567-890",
    address: "Calle Principal, 123, Barcelona",
    yearsOfExperience: "2005-03-15T00:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "https://example.com/img1.jpg",
    role: "ROLE_COMPANY",
    companyTypes: ["SL"],
  },
  {
    name: "Carpintería López",
    age: 35,
    email: "info@carpinterialopez.com",
    password: "password456",
    phoneNumber: "+34-932-345-678",
    address: "Avenida de la Madera, 45, Madrid",
    yearsOfExperience: "2010-07-22T00:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "https://example.com/img2.jpg",
    role: "ROLE_COMPANY",
    companyTypes: ["SA"],
  },
  {
    name: "Fontanería Rodríguez",
    age: 38,
    email: "info@fontaneriarodriguez.com",
    password: "password789",
    phoneNumber: "+34-936-456-789",
    address: "Calle del Agua, 7, Valencia",
    yearsOfExperience: "2008-11-10T00:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "https://example.com/img3.jpg",
    role: "ROLE_COMPANY",
    companyTypes: ["SAL"],
  },
  {
    name: "Pinturas Gómez",
    age: 30,
    email: "info@pinturasgomez.com",
    password: "password101",
    phoneNumber: "+34-938-567-123",
    address: "Plaza de la Pintura, 12, Sevilla",
    yearsOfExperience: "2015-05-02T00:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "https://example.com/img4.jpg",
    role: "ROLE_COMPANY",
    companyTypes: ["CB"],
  },
  {
    name: "Techos y Tejas SCOL",
    age: 45,
    email: "info@techostejas.com",
    password: "password112",
    phoneNumber: "+34-939-123-456",
    address: "Calle de los Techos, 3, Barcelona",
    yearsOfExperience: "2000-12-05T00:00:00.000+00:00",
    specialization: [],
    contacts: [],
    comments: [],
    img: "https://example.com/img5.jpg",
    role: "ROLE_COMPANY",
    companyTypes: ["SCOL"],
  },
];

module.exports = complexUserData;
