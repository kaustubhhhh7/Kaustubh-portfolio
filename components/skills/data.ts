type SkillItemType = {
    name: string
    level: number
}

type SkillGroupType = {
    group: string
    skills: SkillItemType[]
}

export const data: SkillGroupType[] = [
    {
        group: 'Programming Languages',
        skills: [
            {
                name: 'OOP',
                level: 85
            },
            {
                name: 'C',
                level: 75
            },
            {
                name: 'C++',
                level: 80
            },
            {
                name: 'Python',
                level: 60
            },
            {
                name: 'Java',
                level: 70
            },
            {
                name: 'JavaScript',
                level: 90
            },
            {
                name: 'TypeScript',
                level: 85
            }
        ]
    },
    {
        group: 'Web/Backend',
        skills: [
            {
                name: 'Node.js',
                level: 70
            },
            {
                name: 'Express.js',
                level: 70
            },
            {
                name: 'MERN',
                level: 70
            },
            {
                name: 'ASP.NET',
                level: 75
            },
            {
                name: 'ASP.NET Core',
                level: 75
            }
        ]
    },
    {
        group: 'Databases',
        skills: [
            {
                name: 'MongoDB',
                level: 85
            },
            {
                name: 'MySQL',
                level: 90
            },
            {
                name: 'SQL Server',
                level: 90
            }
        ]
    },
    {
        group: 'Machine Learning Tools',
        skills: [
            {
                name: 'Scikit-learn',
                level: 60
            },
            {
                name: 'Pandas',
                level: 60
            },
            {
                name: 'Numpy',
                level: 60
            }
        ]
    },
    {
        group: '3D Design Tools',
        skills: [
            {
                name: 'Blender (Intermediate)',
                level: 60
            }
        ]
    },
    {
        group: 'Development Platforms',
        skills: [
            {
                name: 'Google Colab',
                level: 80
            },
            {
                name: 'Visual Studio Code',
                level: 90
            }
        ]
    }
]

