export default (req, res) => {
  const { id } = req.query;

  // Aquí puedes consultar la información del candidato según el ID
  // y responder con los datos necesarios
  const candidatos = {
    "2zd33b8a": {
      id: 1,
      nombre: "Ing. Renato Ponciano",
      introduccion:
        "Profesor e investigador de la USAC, Doctor en ciencias sociales por la Universidad de Padua, Italia, Máster por la Universidad de Maastricht, Holanda, Premio a la Excelencia Académica como profesor de postgrado 2020, USAC.",
      image: "/images/candidatos/1.png",
      descripcion:
        "Renato Ponciano es ingeniero químico graduado de la Universidad de San Carlos de Guatemala (USAC).   Tiene dos maestrías, la primera en Estudios Europeos sobre Sociedad, Ciencia y Tecnología de la Universidad de Maastricht en Holanda; y la segunda en Tecnologías Innovadoras a base de Membranas para el Tratamiento de Agua de la Universidad de Génova, Italia;  allí fue parte del equipo de investigación de dicha Universidad y de la compañía italiana AMGA StA para el montaje de una planta de tratamiento de aguas servidas del tipo MBR. Es Doctor en Ciencias Sociales por la Universidad de Padua, Italia.  En su doctorado prosiguió su estudio de los problemas de Ciencia, Tecnología y Sociedad, enfocándose en su tesis en la aplicación de métodos cuantitativos para el estudio de la representación pública de los conflictos ambientales en Guatemala.\n\nActualmente se desempeña como Profesor Titular en el Departamento de Matemática, donde ocupa el puesto de Jefe del Área Matemática Básica y hasta 2022, en la Escuela de Postgrado de la Facultad de Ingeniería de la USAC, que le otorgó en 2020 el Premio a la Excelencia Académica como docente-investigador. Ha asesorado numerosas tesis a nivel pre-grado y postgrado. Además, es el responsable del diseño e implementación del curso “Separaciones por medio de membranas selectivas, IQ-7”, que desde 2007 se imparte en la Escuela de Ingeniería Química de la FIUSAC y que él mismo impartió hasta 2014. Ha presentado ponencias sobre sus investigaciones en congresos en México, República Dominicana, Colombia, Chile, Suecia, Francia, Austria, Argentina, Italia y Estados Unidos.  Habla fluidamente inglés e italiano.  Participa políticamente porque está convencido que la academia solo puede florecer en una universidad libre de las mafias que la han cooptado por tantos años.",
    },
    "2zd33b8b": {
      id: 2,
      nombre: "Ing. Guillermo Puente",
      introduccion:
        "Ingeniero electrónico graduado de la USAC, cuenta con pensum cerrado de la maestría en administración de proyectos. Ha recibido diversos cursos en el ámbito de gestión ambiental, ahorro de energía, energía renovable, desarrollo rural, economía campesina en los países de México, Perú y Guatemala. ",
      image: "/images/candidatos/2.png",
      descripcion:
        "Guillermo Puente es ingeniero electrónico graduado de la USAC, cuenta con pensum cerrado de la maestría en administración de proyectos. Ha recibido diversos cursos en el ámbito de gestión ambiental, ahorro de energía, energía renovable, desarrollo rural, economía campesina en los países de México, Perú y Guatemala.\n\nFue director de la escuela de Mecánica Eléctrica de la facultad de ingeniería de la USAC en los años 2010 a 2014. Actualmente es profesor titular V de los cursos de: Comunicaciones, Circuitos eléctricos 2, electrónica 2 e ingeniería eléctrica 1. Además, a impartido los cursos en escuela de vacaciones de Electrónica 1, Teoría electromagnética 1 y 2. Ha sido profesor interino del curso de electrónica aplicada 2 y del curso de postgrado: Propedéutico electricidad y electrónica.\n\nHa sido en varias ocasiones asesor en trabajos de graduación, ha sido delegado de OLADE, CONCYT y la DIGI como investigador, desarrollando artículos científicos. Ha tenido los reconocimientos como el docente mejor evaluado por los estudiantes en el área de electrónica y por su incalculable aporte al desarrollo de la ingeniería eléctrica y electrónica, por su entrega y dedicación en las labores de la escuela, actividades extracurriculares y soporte académico. Ha sido candidato a decano de la facultad en el 2014 siendo el ganador con la planilla estudiantil y candidato a decano en el 2019.",
    },
    "2zd33b8c": {
      id: 3,
      nombre: "Tu Propones",
      introduccion:
        "La propuesta de SOS Usac Ingeniería es recuperar el espíritu de una elección interna primaria por parte de todos nuestros miembros tanto estudiantes,docentes y profesionales con precandidatos al puesto de decano de la Facultad de Ingeniería de la Universidad de San Carlos de Guatemala.Para decidir quién disputará la decanatura como candidato final por parte de la propuesta de SOS Usac. ",
      image: "/images/candidatos/desconocido.png",
      descripcion:
        "Nuestros precandidatos poseen un posicionamiento político para devolver a la Usac la autonomía que se ha perdido en manos de mafias. En SOS, creemos firmemente en la transparencia como pilar esencial de nuestra misión. Sabemos que para construir una Universidad fuerte y justa, debemos empezar desde adentro. Por eso, estamos comprometidos en llevar a cabo una elección interna que refleje estos principios.\n\nLa transparencia es la clave para construir la confianza en nuestra comunidad universitaria. Queremos que todos ustedes se sientan seguros de que cada voto cuenta, que cada voz es escuchada y que los procesos son justos y equitativos. No habrá puertas cerradas ni acuerdos en la sombra. Cada etapa del proceso será abierta y accesible, y nos comprometemos a brindar información clara y verificable en cada paso del camino.\n\nPero para llevar a cabo esta misión, necesitamos líderes comprometidos con estos valores, un líder que no solo hable de transparencia, sino que los viva y los respire. Y es por eso que te animamos a ser nuestro precandidato. Si compartes nuestra visión de una Universidad de San Carlos de Guatemala más transparente, justa y libre de corrupción, te necesitamos.\n\nJuntos, podemos ser el cambio que nuestra facultad necesita. Juntos, podemos demostrar que una elección interna puede ser un ejemplo de democracia y transparencia. Juntos, podemos luchar contra la corrupción y construir un futuro mejor para nuestra universidad.\n\nÚnete a SOS y sé el líder que guiará a nuestra facultad hacia un futuro brillante, y juntos, las levantaremos con orgullo. ¡Adelante, compañeros! ¡Juntos, lograremos un cambio positivo.",
    },
  };

  const candidato = candidatos.find((c) => c.id === parseInt(id, 10));

  if (candidato) {
    res.status(200).json(candidato);
  } else {
    res.status(404).json({ message: "Candidato no encontrado" });
  }
};
