// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="https://nextjs.org/icons/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="https://nextjs.org/icons/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion, useAnimation, useScroll } from "framer-motion";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Text } from "@react-three/drei";
// // import * as THREE from "three";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// function FloatingSkills() {
//   const skills = [
//     "React",
//     "Vue.js",
//     "Python",
//     "Go",
//     "UI/UX",
//     "Project Management",
//   ];
//   return (
//     <group>
//       {skills.map((skill, index) => (
//         <Text
//           key={index}
//           position={[
//             Math.sin(index) * 3,
//             Math.cos(index) * 3,
//             Math.sin(index + Math.PI) * 3,
//           ]}
//           fontSize={0.5}
//           color="white"
//         >
//           {skill}
//         </Text>
//       ))}
//     </group>
//   );
// }

// function AnimatedSphere() {
//   const meshRef = useRef<THREE.Mesh>(null);
//   useFrame((state, delta) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x += delta * 0.2;
//       meshRef.current.rotation.y += delta * 0.3;
//     }
//   });
//   return (
//     <mesh ref={meshRef}>
//       <sphereGeometry args={[1, 32, 32]} />
//       <meshStandardMaterial color="#4338ca" wireframe />
//     </mesh>
//   );
// }

// export default function Portfolio() {
//   const [activeTab, setActiveTab] = useState("about");
//   const controls = useAnimation();
//   const { scrollYProgress } = useScroll();

//   useEffect(() => {
//     controls.start({ opacity: 1, y: 0 });
//   }, [controls]);

//   const projects = [
//     {
//       title: "UI/UX Design Project",
//       description:
//         "Led a team of 8 in a 3-month UI/UX design project, achieving 95% on-time completion rate.",
//       technologies: ["Figma"],
//       link: "#",
//     },
//     {
//       title: "Fullstack Development Project",
//       description:
//         "Developed a fullstack application using Vue.js, Go, and MySQL during internship at Rakamin Academy.",
//       technologies: ["Vue.js", "Go", "MySQL"],
//       link: "#",
//     },
//     {
//       title: "Educational App UX Research",
//       description:
//         "Conducted user research and created wireframes for educational applications at Luarsekolah.",
//       technologies: ["User Research", "Wireframing", "Prototyping"],
//       link: "#",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600 text-white">
//       <header className="sticky top-0 z-50 backdrop-blur-md bg-black bg-opacity-30">
//         <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
//           <motion.h1
//             className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             Samuel Franciscus Togar Hasurungan
//           </motion.h1>
//           <nav>
//             <Button
//               variant={activeTab === "about" ? "default" : "ghost"}
//               onClick={() => setActiveTab("about")}
//               className="mr-2"
//             >
//               About
//             </Button>
//             <Button
//               variant={activeTab === "projects" ? "default" : "ghost"}
//               onClick={() => setActiveTab("projects")}
//             >
//               Projects
//             </Button>
//           </nav>
//         </div>
//       </header>
//       <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//         {activeTab === "about" && (
//           <motion.div
//             className="px-4 py-6 sm:px-0"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Card className="bg-white bg-opacity-10 backdrop-blur-lg">
//               <CardHeader>
//                 <CardTitle className="text-3xl font-bold">About Me</CardTitle>
//                 <CardDescription>
//                   Project Manager & Information Systems Student
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="mb-6 h-64">
//                   <Canvas>
//                     <ambientLight intensity={0.5} />
//                     <pointLight position={[10, 10, 10]} />
//                     <OrbitControls enableZoom={false} />
//                     <AnimatedSphere />
//                     <FloatingSkills />
//                   </Canvas>
//                 </div>
//                 <p className="text-lg mb-4">
//                   Student of Information System and Technology major with a
//                   strong enthusiasm for continuous learning. Highly curious
//                   about learning new things, determined to improve and doesnt
//                   shy away from challenges and failures. Currently interested in
//                   data science and web development.
//                 </p>
//                 <div className="mt-4">
//                   <h3 className="text-xl font-semibold mb-2">Education</h3>
//                   <p>B.Sc in Information System and Technology</p>
//                   <p>Bandung Institute of Technology (ITB)</p>
//                   <p>August 2022 – (Expected) July 2026</p>
//                 </div>
//                 <div className="mt-4">
//                   <h3 className="text-xl font-semibold mb-2">Skills</h3>
//                   <ul className="list-disc list-inside grid grid-cols-2 gap-2">
//                     <li>Languages: Indonesian, English</li>
//                     <li>Software: Microsoft Office, VSCode, Figma</li>
//                     <li>Programming: Python, SQL, C, HTML, CSS, JavaScript</li>
//                     <li>Frameworks: React, Vue.js</li>
//                     <li>Soft Skills: Critical Thinking, Problem Solving</li>
//                     <li>Industrial: Project Management, Web Development</li>
//                   </ul>
//                 </div>
//               </CardContent>
//               <CardFooter className="flex justify-between">
//                 <Button variant="outline" asChild>
//                   <a
//                     href="https://www.linkedin.com/in/samuelfrans/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     LinkedIn
//                   </a>
//                 </Button>
//                 <Button variant="outline" asChild>
//                   <a href="mailto:samuelfrans672@gmail.com">Email</a>
//                 </Button>
//                 <Button variant="outline" asChild>
//                   <a href="tel:+6287735359545">Phone</a>
//                 </Button>
//               </CardFooter>
//             </Card>
//           </motion.div>
//         )}
//         {activeTab === "projects" && (
//           <motion.div
//             className="px-4 py-6 sm:px-0"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="text-3xl font-bold mb-6">Projects</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {projects.map((project, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <Card className="h-full bg-white bg-opacity-10 backdrop-blur-lg hover:bg-opacity-20 transition-all duration-300">
//                     <CardHeader>
//                       <CardTitle>{project.title}</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <p className="mb-4">{project.description}</p>
//                       <div>
//                         <h4 className="font-semibold mb-2">
//                           Technologies used:
//                         </h4>
//                         <ul className="list-disc list-inside">
//                           {project.technologies.map((tech, i) => (
//                             <li key={i}>{tech}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     </CardContent>
//                     <CardFooter>
//                       <Button asChild>
//                         <a
//                           href={project.link}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           View Project
//                         </a>
//                       </Button>
//                     </CardFooter>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </main>
//       <footer className="mt-12 py-6 text-center text-sm">
//         <p>
//           &copy; 2023 Samuel Franciscus Togar Hasurungan. All rights reserved.
//         </p>
//       </footer>
//     </div>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function FloatingSkills() {
  const skills = [
    "React",
    "Vue.js",
    "Python",
    "Go",
    "UI/UX",
    "Project Management",
  ];
  return (
    <group>
      {skills.map((skill, index) => (
        <Text
          key={index}
          position={[
            Math.sin(index) * 3,
            Math.cos(index) * 3,
            Math.sin(index + Math.PI) * 3,
          ]}
          fontSize={0.5}
          color="white"
        >
          {skill}
        </Text>
      ))}
    </group>
  );
}

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((_state: unknown, delta: number) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#4338ca" wireframe />
    </mesh>
  );
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about");
  const controls = useAnimation();
  //const { scrollYProgress } = useScroll()

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const projects = [
    {
      title: "UI/UX Design Project",
      description:
        "Led a team of 8 in a 3-month UI/UX design project, achieving 95% on-time completion rate.",
      technologies: ["Figma"],
      link: "#",
    },
    {
      title: "Fullstack Development Project",
      description:
        "Developed a fullstack application using Vue.js, Go, and MySQL during internship at Rakamin Academy.",
      technologies: ["Vue.js", "Go", "MySQL"],
      link: "#",
    },
    {
      title: "Educational App UX Research",
      description:
        "Conducted user research and created wireframes for educational applications at Luarsekolah.",
      technologies: ["User Research", "Wireframing", "Prototyping"],
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600 text-white">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black bg-opacity-30">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <motion.h1
            className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Samuel Franciscus Togar Hasurungan
          </motion.h1>
          <nav>
            <Button
              variant={activeTab === "about" ? "default" : "ghost"}
              onClick={() => setActiveTab("about")}
              className="mr-2"
            >
              About
            </Button>
            <Button
              variant={activeTab === "projects" ? "default" : "ghost"}
              onClick={() => setActiveTab("projects")}
            >
              Projects
            </Button>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {activeTab === "about" && (
          <motion.div
            className="px-4 py-6 sm:px-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white bg-opacity-10 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-3xl font-bold">About Me</CardTitle>
                <CardDescription>
                  Project Manager & Information Systems Student
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 h-64">
                  <Canvas>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <OrbitControls enableZoom={false} />
                    <AnimatedSphere />
                    <FloatingSkills />
                  </Canvas>
                </div>
                <p className="text-lg mb-4">
                  Student of Information System and Technology major with a
                  strong enthusiasm for continuous learning. Highly curious
                  about learning new things, determined to improve and doesnt
                  shy away from challenges and failures. Currently interested in
                  data science and web development.
                </p>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p>B.Sc in Information System and Technology</p>
                  <p>Bandung Institute of Technology (ITB)</p>
                  <p>August 2022 – (Expected) July 2026</p>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">Skills</h3>
                  <ul className="list-disc list-inside grid grid-cols-2 gap-2">
                    <li>Languages: Indonesian, English</li>
                    <li>Software: Microsoft Office, VSCode, Figma</li>
                    <li>Programming: Python, SQL, C, HTML, CSS, JavaScript</li>
                    <li>Frameworks: React, Vue.js</li>
                    <li>Soft Skills: Critical Thinking, Problem Solving</li>
                    <li>Industrial: Project Management, Web Development</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <a
                    href="https://www.linkedin.com/in/samuelfrans/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:samuelfrans672@gmail.com">Email</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:+6287735359545">Phone</a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}
        {activeTab === "projects" && (
          <motion.div
            className="px-4 py-6 sm:px-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white bg-opacity-10 backdrop-blur-lg hover:bg-opacity-20 transition-all duration-300">
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{project.description}</p>
                      <div>
                        <h4 className="font-semibold mb-2">
                          Technologies used:
                        </h4>
                        <ul className="list-disc list-inside">
                          {project.technologies.map((tech, i) => (
                            <li key={i}>{tech}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </main>
      <footer className="mt-12 py-6 text-center text-sm">
        <p>
          &copy; 2023 Samuel Franciscus Togar Hasurungan. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
