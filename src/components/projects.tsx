'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Project {
    name: string;
    href: string;
}

export default function ProjectsNavBar() {
    const [selected, setSelected] = useState<string | undefined>('');
    
    const end = usePathname().split('/').pop();
    if(selected !== end) {
        setSelected(end);
    }

    // This is being called from projects/ not projects/[project]
    const projects: Project[] = [
        { name: 'Translation Suite', href:'translation-suite' },
        { name: 'Solar System C++' , href:'solar-system-c++'  },
    ]
  
    return (
    <div>
        <div className="relative bg-red grain text-white px-3 sm:px-6 w-full flex items-baseline">
            <div className="ml-2 flex flex-row">
                {
                    projects.map((project: Project) => {
                        let style = '';
                        if(project.href === selected) {
                            style = 'bg-red-highlight grain';
                        }

                        return (
                            <Link className={`py-3 px-2 box-border h-full link ${style}`} key={project.href} href={`../projects/${project.href}`}>
                                {project.name}
                            </Link>
                        );
                    })
                }
            </div>
        </div>
    </div>
  );
}