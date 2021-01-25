var list = [
    {
        id: 10,
        firstName: 'okok',
        lastName: 'okok'
    },
    {
        id: 2,
        firstName: 'okok',
        lastName: 'okok'
    },
    {
        id: 1,
        firstName: 'okok',
        lastName: 'okok'
    }
]

// -> kiszedjük az id-kat: [10, 2, 1]

// select t.Id as TeacherId, m.Id as MajorId, m.Name as MajorName
// from
// 	Teachers t
// 	inner join MajorTeacher mt on mt.TeacherId = t.Id
// 	inner join Majors m on m.Id = mt.MajorId
// where t.Id in (...ide jönnek az id-k...)

[
    {
        TeacherId: 2,
        MajorId: 5,
        MajorName: 'botany'
    },
    {
        TeacherId: 2,
        MajorId: 7,
        MajorName: 'maths'
    },
    {
        TeacherId: 1,
        MajorId: 4,
        MajorName: 'PE'
    },
    {
        TeacherId: 10,
        MajorId: 9,
        MajorName: 'IT'
    }
]

// -> 

var majorsByTeacherId = {
    "2": [
        {
            MajorId: 5,
            MajorName: 'botany'
        },
        {
            MajorId: 7,
            MajorName: 'maths'
        }
    ],
    "1": [
        {
            MajorId: 4,
            MajorName: 'PE'
        },
    ],
    "10": [
        {
            MajorId: 9,
            MajorName: 'IT'
        }
    ]
}

majorsByTeacherId[teacherId.toString()]

list.map(x => ({
    ...x,
    majors: majorsByTeacherId[x.Id.toString()]
}))

// -> 

var list = [
    {
        id: 10,
        firstName: 'okok',
        lastName: 'okok',
        majors: [
            {
                MajorId: 9,
                MajorName: 'IT'
            }
        ]
    },
    {
        id: 2,
        firstName: 'okok',
        lastName: 'okok',
        majors: [
            {
                MajorId: 5,
                MajorName: 'botany'
            },
            {
                MajorId: 7,
                MajorName: 'maths'
            }
        ]
    },
    {
        id: 1,
        firstName: 'okok',
        lastName: 'okok',
        majors: [
            {
                MajorId: 4,
                MajorName: 'PE'
            },
        ]
    }
]