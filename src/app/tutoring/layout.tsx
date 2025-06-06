import ComingSoon from "@/components/comingsoon";

export default function TutoringLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
    <div>
        <ComingSoon/>
        {/* REMOVE TO VIEW PROJECTS
        <ProjectsNavBar/>
        {children}
        */}
        <div className="hidden">
          {children}
        </div>
    </div>
  );
}
