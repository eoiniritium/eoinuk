import ProjectsNavBar from "@/components/projects";

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
    <div>
        <ProjectsNavBar/>
        {children}
    </div>
  );
}
