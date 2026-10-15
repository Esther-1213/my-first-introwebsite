
/* =========================================================
   YEWON CHUNG — EDITORIAL PORTFOLIO
   SCRIPT.JS

   01. Basic Settings
   02. About Content
   03. Project Content (8 Works)
   04. HTML Helpers
   05. About Page
   06. Works Page
   07. Project Detail Page
   08. Routing & Interaction

   NOTE
   - index.html, style.css와 함께 사용
   - 이미지는 intro_images/ 폴더
   - PDF는 documents/ 폴더
   ========================================================= */


/* =========================================================
   01. BASIC SETTINGS
   ========================================================= */

const app = document.getElementById("app");

const IMAGE_DIR = "intro_images/";
const DOCUMENT_DIR = "documents/";

const image = (filename) => IMAGE_DIR + filename;
const documentFile = (filename) => DOCUMENT_DIR + filename;

document.getElementById("year").textContent =
  new Date().getFullYear();

/*
  HTML 문자열에 들어가는 텍스트를 안전하게 처리합니다.
*/
function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[char];
  });
}

/*
  한 문단에 줄바꿈이 필요한 경우를 지원합니다.
*/
function formatText(value = "") {
  return escapeHTML(value).replace(/\n/g, "<br>");
}


/* =========================================================
   02. ABOUT CONTENT
   ========================================================= */

/*
  사용자가 최종 확정한 영문 자기소개입니다.
*/

const aboutParagraphs = [
  "I'm an undergraduate student at Seoul National University, studying Plant Science and Vocational Education and Workforce Development.",

  "I'm interested in service planning, UX design, and human–computer interaction, particularly how technology can shape meaningful human experiences.",

  "My work spans AI-assisted services, interactive web projects, and creative experiments connecting science, technology, and art."
];

/*
  관심 분야 키워드
*/

const interests = [
  "Service Planning",
  "UX/UI Design",
  "Human–Computer Interaction",
  "Human–AI Interaction",
  "Creative Coding",
  "Interactive Media",
  "Music & Technology",
  "Plant Science"
];

/*
  Selected Experiences

  확정된 활동을 중심으로 구성했습니다.
  연구실 인턴십은 2025년 7~8월입니다.
*/

const experiences = [
  {
    date: "2026",
    name: "CES & Silicon Valley Exploration",
    description: "Technology and innovation exploration · COZY project development"
  },
  {
    date: "2025",
    name: "Australia Academic Visit",
    description: "Academic visits to the University of Sydney and the University of Western Australia"
  },
  {
    date: "2025.07—08",
    name: "Undergraduate Research Intern",
    description:
      "Department of Plant Sciences, Seoul National University · Fieldwork and research for a conference presentation on early-stage weed identification"
  },
  {
    date: "2025",
    name: "SNU Buddy",
    description: "International student exchange activities"
  },
  {
    date: "2024",
    name: "AAACU International Program",
    description: "International academic exchange program"
  },
  {
    date: "2023—2024",
    name: "CALS Student Ambassador",
    description: "College of Agriculture and Life Sciences, Seoul National University"
  }
];

/*
  Awards

  실제 수상한 세 가지 경력만 표시합니다.
*/

const awards = [
  {
    date: "2026",
    name: "Outstanding Poster Award",
    description:
      "Korean Society for Agricultural and Industrial Education · HRD Research"
  },
  {
    date: "2025",
    name: "Excellence Award — Microlearning Content",
    description: "Blaybus"
  },
  {
    date: "2025",
    name: "Excellence Award — Startup Competition",
    description:
      "College of Agriculture and Life Sciences, Seoul National University · Fielding"
  }
];


/* =========================================================
   03. PROJECT CONTENT
   총 8개 Works

   RESEARCH
   01. Mask R-CNN
   02. HRD Research
   03. COZY Initial Concept

   PROJECTS
   04. COZY
   05. Fielding
   06. Seasons I Almost Passed By
   07. Cupid Rio
   08. Where Does Creation Happen?
   ========================================================= */

const projects = [

  /* =======================================================
     PROJECT 01 — MASK R-CNN
     ======================================================= */

  {
    id: "mask-rcnn",
    number: "01",
    category: "research",
    year: "2025",

    title: "Automatic Early-stage Weed Identification",

    subtitle: "Field RGB Images × Mask R-CNN",

    tagline:
      "Using Field RGB Images and Mask R-CNN",

    thumbnail: image("maskrcnn.png"),
    hero: image("maskrcnn.png"),

    heroCaption:
      "Automatic Early-stage Weed Identification · Research Visualization",

    cardDescription:
      "현장 RGB 이미지와 딥러닝 기반 객체 분할 모델을 활용한 초기 생육 단계 잡초 자동 식별 연구",

    summary:
      "초기 생육 단계의 잡초는 형태가 유사해 육안으로 구별하기 어렵습니다. 본 연구에서는 현장에서 촬영한 RGB 이미지에 데이터 증강 기법과 Mask R-CNN 모델을 적용하여 잡초의 종류와 위치를 자동으로 식별하는 방법을 탐구했습니다.",

    type: "Collaborative Research",

    affiliation: "2025 한국잡초학회",

    role:
      "Image Segmentation · Research Poster Design · Abstract Writing",

    tools:
      "Field RGB Images · SAM · Mask R-CNN",

    status: "Research Presentation",

    sections: [
      {
        label: "BACKGROUND",
        title: "초기 잡초 식별의 어려움",

        paragraphs: [
          "잡초는 작물과 수분, 빛, 양분을 두고 경쟁하기 때문에 초기 생육 단계에서 관리하는 것이 중요합니다. 그러나 이 시기의 잡초는 형태가 유사하여 종류를 구별하기 어렵습니다.",

          "본 연구에서는 이러한 문제를 해결하기 위해 현장에서 촬영한 RGB 이미지와 딥러닝 기반 객체 분할 기술을 활용한 자동 잡초 식별 방법을 탐구했습니다."
        ]
      },
      {
        label: "RESEARCH PROCESS",
        title: "이미지 데이터에서 식별 모델까지",

        paragraphs: [
          "서울대학교 수원 농장에서 촬영한 RGB 이미지를 바탕으로 5종의 잡초와 2종의 작물을 연구 대상으로 설정했습니다.",

          "Segment Anything Model(SAM)을 활용해 식물 개체를 분리하고, 토양 배경과 합성하는 방식으로 학습 데이터를 증강했습니다. 총 1,200장의 합성 이미지를 생성했으며, Mask R-CNN 모델을 이용해 식물의 종류와 영역을 식별하는 과정을 수행했습니다."
        ]
      },
      {
        label: "RESULTS",
        title: "식물의 종류와 위치를 함께 식별하다",

        paragraphs: [
          "연구 포스터에서는 학습된 모델이 이미지 속 잡초의 종류를 구별하고, 개체별 영역을 분할하는 결과를 제시했습니다.",

          "이는 초기 생육 단계의 잡초를 자동으로 식별하는 기술의 적용 가능성을 보여줍니다. 다만 정량적인 성능 지표와 다른 모델과의 비교 검증은 후속 연구 과제로 제시되었습니다."
        ]
      },
      {
        label: "MY CONTRIBUTION",
        title: "Image Segmentation · Poster Design · Abstract Writing",

        paragraphs: [
          "초기 생육 단계의 잡초를 자동으로 식별하는 연구에 참여하여, 식물 이미지의 Segmentation 작업을 담당했습니다. 연구 과정에서 식물 개체를 분리하는 이미지 처리 작업을 수행했으며, 연구 내용을 정리한 초록과 학술대회 발표 포스터를 직접 작성했습니다.",

          "특히 연구 배경부터 데이터 처리 과정, 모델 학습 및 식별 결과까지의 흐름을 하나의 포스터에 구성하며, 복잡한 기술적 내용을 시각적으로 전달하는 경험을 쌓았습니다."
        ]
      }
    ],

    gallery: [
      {
        src: image("maskrcnn_2.png"),
        caption: "Research Process & Segmentation Results",
        layout: "full"
      }
    ],

    documents: [
      {
        label: "VIEW ABSTRACT ↗",
        file: documentFile("maskrcnn-abstract.pdf"),
        download: false
      },
      {
        label: "DOWNLOAD ABSTRACT ↓",
        file: documentFile("maskrcnn-abstract.pdf"),
        download: true
      }
    ]
  },


  /* =======================================================
     PROJECT 02 — HRD RESEARCH
     ======================================================= */

  {
    id: "paradox-of-support",
    number: "02",
    category: "research",
    year: "2026",

    title: "The Paradox of Support",

    subtitle:
      "Inclusive HRM × Integrated Engagement",

    tagline:
      "When More Support Does Not Always Mean More Engagement",

    thumbnail: image("hrd_1.png"),
    hero: image("hrd_1.png"),

    heroCaption:
      "Research Model · The Paradox of Support",

    cardDescription:
      "육아휴직·보육지원 제도의 활성화 수준과 통합적 몰입 간 비선형 관계에 관한 연구",

    summary:
      "조직의 지원 제도는 많을수록 구성원의 몰입을 높일까요? 본 연구에서는 한국노동패널(KLIPS) 27차 데이터를 활용해 육아휴직 및 보육지원 제도의 활성화 수준과 통합적 몰입 간의 비선형 관계를 분석하고, 정서적·관계적 성향에 따른 차이를 살펴보았습니다.",

    type: "Collaborative Research",

    affiliation:
      "2026 한국농·산업교육학회",

    role:
      "Research Ideation · Statistical Analysis (R)",

    tools:
      "R · KLIPS 27th Wave",

    status:
      "Outstanding Poster Award",

    sections: [
      {
        label: "OFFICIAL RESEARCH TITLE",
        title: "연구 제목",

        paragraphs: [
          "육아휴직 및 보육지원 제도의 활성화 수준과 통합적 몰입 간 비선형 관계에 관한 연구: 감성 지능의 조절효과를 중심으로"
        ]
      },
      {
        label: "BACKGROUND",
        title: "지원은 많을수록 좋을까요?",

        paragraphs: [
          "육아휴직과 보육지원 제도는 구성원의 다양한 상황을 고려하는 포용적 인적자원관리의 중요한 수단입니다. 그러나 지원 제도가 확대되는 것이 언제나 구성원의 조직 몰입 증가로 이어지는지는 별도로 살펴볼 필요가 있습니다.",

          "본 연구는 제도적 지원과 구성원의 통합적 몰입 사이에 비선형 관계가 존재할 가능성에 주목했습니다."
        ]
      },
      {
        label: "RESEARCH PROCESS",
        title: "지원 수준과 몰입의 관계 분석",

        paragraphs: [
          "한국노동패널(KLIPS) 27차 데이터를 활용하여 육아휴직 및 보육지원 제도의 활성화 수준을 독립변수로, 통합적 몰입을 종속변수로 설정했습니다.",

          "또한 정서적·관계적 성향을 나타내는 감성지능(EQ) 대리변수를 활용하여, 이러한 관계가 개인의 특성에 따라 어떻게 달라지는지 분석했습니다."
        ]
      },
      {
        label: "FINDINGS",
        title: "배려의 역설",

        paragraphs: [
          "분석 결과, 육아휴직 및 보육지원 제도의 활성화 수준과 통합적 몰입 사이에서 역U자형 관계가 나타났습니다. 이는 제도적 지원이 일정 수준을 넘어 확대될 경우, 몰입에 미치는 긍정적 효과가 약화되거나 부정적으로 전환될 가능성을 보여줍니다.",

          "또한 EQ 대리변수에 따라 비선형 관계의 양상이 달라지는 것으로 나타났습니다."
        ]
      },
      {
        label: "IMPLICATIONS",
        title: "제도의 양보다 운영의 맥락",

        paragraphs: [
          "연구 결과는 지원 제도의 양적 확대뿐 아니라, 구성원이 제도를 심리적 부담 없이 활용할 수 있는 조직문화와 운영 방식이 중요하다는 점을 시사합니다.",

          "포용적 인적자원관리는 제도의 도입 여부를 넘어, 구성원의 정서적 특성과 실제 조직 경험을 함께 고려할 필요가 있습니다."
        ]
      },
      {
        label: "MY CONTRIBUTION",
        title: "Research Ideation · Statistical Analysis (R)",

        paragraphs: [
          "연구의 출발점이 되는 주제를 제안하고, R을 활용한 통계 분석을 담당했습니다.",

          "육아휴직 및 보육지원 제도의 활성화 수준과 조직 구성원의 통합적 몰입 사이의 관계에 주목했으며, 제도적 지원의 효과가 반드시 선형적으로 나타나지는 않을 수 있다는 문제의식을 연구 주제로 발전시켰습니다.",

          "한국노동패널(KLIPS) 27차 데이터를 활용해 두 변수 간의 비선형 관계와 감성지능(EQ) 대리변수의 조절효과를 분석했습니다. 이를 통해 사회과학적 질문을 실제 데이터로 검토하고, 분석 결과를 해석하는 연구 과정을 경험했습니다."
        ]
      }
    ],

    gallery: [
      {
        src: image("hrd_2.png"),
        caption: "Statistical Analysis & Research Findings",
        layout: "full"
      }
    ],

    documents: [
      {
        label: "VIEW CONFERENCE POSTER ↗",
        file: documentFile("hrd-conference-poster.pdf"),
        download: false
      },
      {
        label: "DOWNLOAD POSTER ↓",
        file: documentFile("hrd-conference-poster.pdf"),
        download: true
      }
    ]
  },


  /* =======================================================
     PROJECT 03 — COZY INITIAL CONCEPT
     SNU × Stanford Meetup
     ======================================================= */

  {
    id: "cozy-initial-concept",
    number: "03",
    category: "research",
    year: "2026",

    title: "COZY — Initial Concept",

    subtitle:
      "SNU × Stanford Meetup | Poster Presentation",

    tagline:
      "From Understanding Why to Knowing What to Do",

    thumbnail: image("cozy_poster.jpg"),
    hero: image("cozy_poster.jpg"),

    heroCaption:
      "COZY · Initial Concept Poster · SNU × Stanford Meetup",

    cardDescription:
      "AI 기반 육아 지원 서비스 COZY의 초기 아이디어와 기술적 접근을 소개한 포스터 발표",

    summary:
      "영아 울음 분석을 통해 보호자의 인지적 부담을 줄이는 AI 기반 육아 지원 서비스 COZY의 초기 아이디어를 포스터로 발표했습니다.",

    type: "Poster Presentation",

    affiliation: "SNU × Stanford Meetup",

    role:
      "Poster Design · Competitive Analysis · UI/UX Design",

    tools:
      "Research Poster · Service Concept · Figma",

    status:
      "Initial Concept Presentation",

    sections: [
      {
        label: "INITIAL CONCEPT",
        title: "COZY — Initial Concept",

        paragraphs: [
          "영아 울음 분석을 통해 보호자의 인지적 부담을 줄이는 AI 기반 육아 지원 서비스 COZY의 초기 아이디어를 포스터로 발표했습니다.",

          "울음소리 분류 모델의 기술적 접근과 서비스의 주요 기능을 시각적으로 정리하고, 울음 녹음부터 원인 분석, 행동 제안, 기록 관리까지 이어지는 초기 사용자 흐름을 제시했습니다."
        ]
      },
      {
        label: "DESIGN EVOLUTION",
        title: "From Initial Concept to Service Design",

        paragraphs: [
          "이후 프로젝트를 발전시키며 행동 중심의 정보 제공과 개인화 기능을 강화하는 방향으로 UI/UX를 개선했습니다."
        ]
      }
    ],

    gallery: [],

    documents: [],

    relatedProject: {
      id: "cozy",
      label: "EXPLORE THE DEVELOPED COZY PROJECT ↗"
    }
  },


  /* =======================================================
     PROJECT 04 — COZY
     ======================================================= */

  {
    id: "cozy",
    number: "04",
    category: "projects",
    year: "2026",

    title: "COZY",

    subtitle:
      "AI 기반 영아 울음 분석 및 보호자 행동 지원 서비스",

    tagline:
      "From Understanding Why to Knowing What to Do",

    thumbnail: image("cozy_1.png"),
    hero: image("cozy_1.png"),

    heroCaption:
      "COZY · AI-assisted Infant Care Service · UI/UX Design",

    cardDescription:
      "영아 울음 분석 결과를 보호자의 실제 돌봄 행동으로 연결하는 AI 기반 육아 지원 서비스",

    summary:
      "영아의 울음소리를 분석해 가능한 원인을 제시하고, 보호자가 다음 돌봄 행동을 결정할 수 있도록 돕는 서비스를 기획했습니다. 초기의 원인 분석 중심 설계에서 나아가, 사용자 피드백과 행동 중심의 안내를 강화하는 방향으로 UI/UX를 발전시켰습니다.",

    type: "Team Project",

    affiliation:
      "CES & Silicon Valley Exploration",

    role:
      "UI/UX Design · Competitive Analysis · Poster Design",

    tools:
      "Figma · AI-assisted Service Design",

    status:
      "Service Prototype",

    sections: [
      {
        label: "01 / OVERVIEW",
        title: "프로젝트 소개",

        paragraphs: [
          "COZY는 영아의 울음소리를 분석해 가능한 원인을 제시하고, 보호자가 적절한 돌봄 행동을 선택할 수 있도록 돕는 AI 기반 육아 지원 서비스입니다.",

          "프로젝트는 아기의 울음이 반복될 때마다 그 이유를 추측해야 하는 보호자의 인지적 부담에서 출발했습니다. 울음을 감지하거나 분류하는 기존 접근에서 한 걸음 더 나아가, AI가 제공하는 분석 결과를 보호자의 실제 의사결정에 연결하는 것을 목표로 했습니다."
        ]
      },
      {
        label: "02 / BACKGROUND",
        title: "원인을 아는 것만으로 충분할까요?",

        paragraphs: [
          "아기의 울음은 보호자가 반복적으로 마주하는 신호이지만, 그 원인을 즉시 파악하기는 어렵습니다. 특히 돌봄 경험이 부족한 보호자에게는 울음의 이유를 추측하고 여러 대응 방법을 시도하는 과정 자체가 부담이 될 수 있습니다.",

          "이에 COZY는 울음의 가능한 원인을 분석하고, 보호자가 다음 행동을 판단하는 데 필요한 정보를 함께 제공하는 서비스를 구상했습니다."
        ]
      },
      {
        label: "03 / RESEARCH & ANALYSIS",
        title: "기술의 기능보다 사용자의 경험에 집중했습니다.",

        paragraphs: [
          "기존 육아 지원 서비스의 주요 기능과 정보 제공 방식을 비교하며, 단순한 울음 감지와 원인 분류만으로는 보호자의 의사결정을 충분히 지원하기 어렵다는 문제의식을 구체화했습니다.",

          "이를 바탕으로 COZY에서는 분석 결과뿐 아니라 원인별 행동 제안, 기록 관리, 개인화 기능을 연결하는 사용자 경험을 설계했습니다."
        ]
      },
      {
        label: "04 / DESIGN EVOLUTION",
        title: "From WHY to WHAT NEXT",

        paragraphs: [
          "초기 프로토타입은 울음소리를 분석해 가능한 원인을 보여주는 기능을 중심으로 구성했습니다. 그러나 기획을 발전시키는 과정에서, 보호자에게 필요한 것은 원인을 확인하는 것뿐 아니라 그 정보를 바탕으로 다음 행동을 결정하는 과정이라는 점에 주목했습니다.",

          "이에 최종 UI에서는 분석 결과와 행동 가이드의 관계를 더욱 명확하게 구성했습니다. 보호자가 여러 정보를 해석하는 데 시간을 쓰기보다, 상황에 맞는 대응 방법을 빠르게 확인할 수 있도록 정보의 우선순위와 화면 구성을 조정했습니다."
        ]
      },
      {
        label: "05 / UI/UX DESIGN",
        title: "정보를 행동으로 연결하는 인터페이스",

        paragraphs: [
          "COZY의 사용자 흐름은 울음 녹음, 원인 분석, 행동 제안, 기록 관리로 이어집니다.",

          "분석 결과 화면에서는 가능한 원인과 그에 대응하는 행동을 함께 제시하도록 구성했습니다. 또한 보호자가 실제로 시도한 행동에 대한 피드백을 남기고, 개인별 설정을 관리할 수 있는 화면을 설계했습니다.",

          "울음 기록은 그래프와 캘린더 형태로 시각화하여, 개별 분석 결과를 확인하는 것에서 나아가 시간에 따른 패턴을 살펴볼 수 있도록 했습니다."
        ]
      },
      {
        label: "06 / TECHNICAL CONTEXT",
        title: "AI 분석 결과를 사용자에게 전달하는 방식",

        paragraphs: [
          "프로젝트에서는 영아의 울음소리를 Mel-spectrogram으로 변환하고, ResNet-18 기반 전이학습을 활용해 울음 유형을 분류하는 기술적 접근을 사용했습니다.",

          "저는 팀 프로젝트에서 포스터 디자인, 경쟁사 분석, UI/UX 설계를 담당했습니다. 특히 기술적 분석 결과를 보호자가 이해하기 쉬운 정보로 구성하고, 실제 돌봄 행동과 연결하는 인터페이스 설계에 집중했습니다."
        ]
      },
      {
        label: "07 / REFLECTION",
        title: "좋은 기술은 사용자의 다음 행동까지 고려해야 합니다.",

        paragraphs: [
          "COZY를 기획하며 AI가 정확한 분석 결과를 제공하는 것과, 사용자가 그 결과를 실제 상황에서 활용할 수 있도록 만드는 것은 서로 다른 과제임을 고민했습니다.",

          "기술의 가능성을 사용자 관점에서 해석하고, 복잡한 정보를 이해하기 쉬운 화면과 행동 흐름으로 구체화하는 과정이 특히 흥미로웠습니다.",

          "이 경험을 통해 기술과 사람 사이를 연결하는 UI/UX 설계의 중요성을 배웠으며, 앞으로도 사용자의 실제 경험에서 출발해 서비스를 기획하고 구현하는 작업을 이어가고자 합니다."
        ]
      }
    ],

    gallery: [
      {
        src: image("cozy_2.png"),
        caption: "Possible Causes & Action Guidance",
        layout: "full"
      },
      {
        src: image("cozy_3.png"),
        caption: "User Profile & Feedback",
        layout: "half"
      },
      {
        src: image("cozy_4.png"),
        caption: "Personalized Settings",
        layout: "half"
      },
      {
        src: image("cozy_5.png"),
        caption: "COZY · Visual Identity",
        layout: "half"
      },
      {
        src: image("cozy_poster.jpg"),
        caption: "COZY · Initial Concept Poster",
        layout: "half"
      }
    ],

    documents: [],

    relatedProject: {
      id: "cozy-initial-concept",
      label: "VIEW INITIAL CONCEPT POSTER ↗"
    }
  },


  /* =======================================================
     PROJECT 05 — FIELDING
     ======================================================= */

  {
    id: "fielding",
    number: "05",
    category: "projects",
    year: "2025",

    title: "Fielding",

    subtitle:
      "취향으로 연결되는 농촌 커뮤니티 플랫폼",

    tagline:
      "Feel the Field, Build the Bond",

    thumbnail: image("fielding_3.png"),
    hero: image("fielding_3.png"),

    heroCaption:
      "Fielding · Rural Stay & Community Platform · Figma Prototype",

    cardDescription:
      "도시 청년의 농촌 체류와 취향 기반 관계 형성을 연결하는 서비스 기획 프로젝트",

    summary:
      "Fielding은 도시 청년들이 농촌에서 취향 기반 활동을 경험하고 새로운 관계를 형성할 수 있도록 기획한 체류형 커뮤니티 플랫폼입니다. 농촌을 일회성 관광지가 아닌 지속적인 방문과 교류가 이루어지는 공간으로 바라보고, 프로그램 탐색부터 예약, 그룹 매칭, 소통까지 이어지는 사용자 경험을 설계했습니다.",

    type:
      "Startup Competition Project",

    affiliation:
      "2025 SNU CALS Startup Competition",

    role:
      "Co-lead & CPO · Product Strategy · Brand Strategy · Service Planning · UI/UX Design",

    tools:
      "Figma · Service Planning · Interactive Prototyping",

    status:
      "Excellence Award · Concept & Prototype",

    sections: [
      {
        label: "OVERVIEW",
        title: "Feel the Field, Build the Bond",

        paragraphs: [
          "Fielding은 도시 청년들이 농촌에서 취향 기반 활동을 경험하고 새로운 관계를 형성할 수 있도록 기획한 체류형 커뮤니티 플랫폼입니다.",

          "농촌을 일회성 관광지가 아닌 지속적인 방문과 교류가 이루어지는 공간으로 바라보고, 프로그램 탐색부터 예약, 그룹 매칭, 소통까지 이어지는 사용자 경험을 설계했습니다."
        ]
      },
      {
        label: "BACKGROUND",
        title: "농촌을 새로운 관계가 시작되는 공간으로",

        paragraphs: [
          "작물생명과학 연구실에서의 필드 작업과 전공 수업을 통해 농촌소멸과 관계인구 문제를 접하면서, 기존 농촌 관광이 도시 청년의 관심과 충분히 연결되지 못하고 있다는 점에 주목하게 되었습니다."
        ]
      },
      {
        label: "SERVICE CONCEPT",
        title: "취향을 기반으로 사람과 지역을 연결하다",

        paragraphs: [
          "청년들이 농촌의 자연환경 속에서 힐링하며 새로운 관계를 형성하고 지속적으로 농촌을 방문할 수 있도록, 취향·성향 기반 소모임과 연애 매칭, 지역 러닝·마라톤 프로그램, 숙박을 결합한 체류형 농촌 커뮤니티 플랫폼을 기획했습니다."
        ]
      },
      {
        label: "MY CONTRIBUTION",
        title: "Product Strategy · Service Planning · UI/UX Design",

        paragraphs: [
          "Fielding에서 서비스의 비전과 브랜드 콘셉트를 정의하고, 시장 및 경쟁 서비스 분석을 바탕으로 핵심 서비스 전략을 수립했습니다.",

          "농촌 체류 경험과 취향 기반 관계 형성을 결합한 프로그램을 기획했으며, 사용자 여정과 기능 구조를 설계하고 Figma를 활용해 실제 앱처럼 탐색할 수 있는 인터랙티브 프로토타입을 제작했습니다.",

          "창업경진대회 팀에서 공동대표이자 CPO 역할을 맡아 프로젝트를 진행했습니다. 실제 출시된 서비스가 아닌 기획 및 프로토타입 단계의 프로젝트입니다."
        ]
      }
    ],

    gallery: [
      {
        src: image("fielding_2.png"),
        caption: "Onboarding & User Experience",
        layout: "half"
      },
      {
        src: image("fielding_4.png"),
        caption: "Rural Stay & Retreat Programs",
        layout: "half"
      },
      {
        src: image("fielding_5.png"),
        caption: "Community Experience",
        layout: "full"
      },
      {
        src: image("fielding_1.png"),
        caption: "Proposed Service Architecture",
        layout: "half"
      },
      {
        src: image("fielding_6.png"),
        caption: "Fielding · Brand Identity",
        layout: "half"
      }
    ],

    documents: []
  },


  /* =======================================================
     PROJECT 06 — SEASONS
     ======================================================= */

  {
    id: "seasons",
    number: "06",
    category: "projects",
    year: "2026",

    title: "Seasons I Almost Passed By",

    subtitle:
      "A Campus Photographic Archive · Web Exhibition",

    tagline:
      "An Interactive Web Exhibition",

    thumbnail: image("exhibition_1.png"),
    hero: image("exhibition_1.png"),

    heroCaption:
      "Seasons I Almost Passed By · Exhibition Map",

    cardDescription:
      "캠퍼스에서 직접 촬영한 13장의 사진을 네 계절의 전시실로 구성한 온라인 사진전",

    summary:
      "익숙한 캠퍼스에서 무심코 지나쳤던 계절의 순간들을 모아 온라인 사진전으로 구성했습니다. 직접 촬영한 13장의 사진을 봄, 여름, 가을, 겨울의 네 전시실에 배치하고, 관람자가 전시 지도를 통해 공간을 선택하고 작품을 감상할 수 있도록 설계했습니다.",

    type: "Personal Web Project",

    affiliation:
      "Web Programming Project",

    role:
      "Concept Planning · Photography · Web Design · HTML/CSS Development",

    tools:
      "HTML · CSS · AI-assisted Development",

    status: "Web Exhibition Project",

    sections: [
      {
        label: "OVERVIEW",
        title: "그냥 지나칠 뻔한 계절들",

        paragraphs: [
          "매일 오가는 캠퍼스에서 무심코 지나쳤던 순간들을 사진으로 기록하고, 이를 하나의 온라인 전시 경험으로 구성했습니다. 2023년부터 2024년까지 촬영한 13장의 사진을 봄, 여름, 가을, 겨울의 네 전시실에 배치했습니다."
        ]
      },
      {
        label: "CONCEPT & EXPERIENCE",
        title: "사진을 보여주는 방식에서 경험하는 방식으로",

        paragraphs: [
          "단순한 사진 갤러리가 아니라, 관람자가 직접 전시실을 선택하고 작품을 감상하는 웹 전시를 기획했습니다.",

          "전시 지도에서 계절을 선택하면 각 전시실의 소개 화면으로 이동하고, 가상의 갤러리 공간에서 사진을 탐색할 수 있습니다. 작품을 선택하면 촬영 시기와 장소, 짧은 기록을 확인할 수 있으며, 마지막에는 전시 전체의 메시지를 담은 종료 화면으로 이어집니다."
        ]
      },
      {
        label: "DESIGN & IMPLEMENTATION",
        title: "HTML과 CSS로 구현한 전시 경험",

        paragraphs: [
          "계절마다 서로 다른 색상과 타이포그래피를 적용하고, 전시 지도와 작품 상세 화면을 구성했습니다. HTML과 CSS를 활용해 화면 구조와 시각적 표현을 구현했으며, AI 도구를 제작 과정에 활용했습니다.",

          "JavaScript 없이 HTML과 CSS만으로 화면 전환과 전시실 탐색 기능을 구현하며, 사진을 보여주는 방식뿐 아니라 사진을 경험하는 방식까지 디자인하고자 했습니다."
        ]
      },
      {
        label: "MY ROLE",
        title: "Concept · Photography · Web Design",

        paragraphs: [
          "전시 콘셉트 및 관람 동선을 기획하고, 직접 촬영한 사진을 큐레이션했습니다.",

          "전시 지도와 인터페이스를 디자인하고 HTML/CSS 기반 인터랙션과 반응형 레이아웃을 구현했습니다."
        ]
      }
    ],

    gallery: [
      {
        src: image("exhibition_2.png"),
        caption: "Spring Exhibition Room",
        layout: "half"
      },
      {
        src: image("exhibition_3.png"),
        caption: "Interactive Photo Gallery",
        layout: "half"
      },
      {
        src: image("exhibition_4.png"),
        caption: "Artwork Detail View",
        layout: "full"
      },
      {
        src: image("exhibition_5.png"),
        caption: "Exhibition Exit",
        layout: "full"
      }
    ],

    documents: []
  },


  /* =======================================================
     PROJECT 07 — CUPID RIO
     ======================================================= */

  {
    id: "cupid-rio",
    number: "07",
    category: "projects",
    year: "2026",

    title: "Cupid Rio",

    subtitle:
      "University Festival Matching Form",

    tagline:
      "Maybe This Is Where Our Story Begins",

    thumbnail: image("form_1.png"),
    hero: image("form_1.png"),

    heroCaption:
      "Cupid Rio · Festival Matching Form",

    cardDescription:
      "청춘 로맨스 웹툰 콘셉트로 제작한 대학 축제 매칭 신청 폼",

    summary:
      "서울대학교 축제의 즉석 소개팅 매칭을 가정하여 제작한 웹 기반 신청 폼입니다. 한국 청춘 로맨스 웹툰을 콘셉트로, 일반적인 설문 양식을 캐릭터와 대화하며 진행하는 인터랙티브 경험으로 재구성했습니다.",

    type: "Personal Web Project",

    affiliation:
      "Web Programming Project",

    role:
      "Concept Planning · Visual Design · HTML/CSS Development",

    tools:
      "HTML · CSS · AI-assisted Visual Design",

    status:
      "Conceptual Web Form",

    sections: [
      {
        label: "OVERVIEW",
        title: "Maybe This Is Where Our Story Begins",

        paragraphs: [
          "서울대학교 축제의 즉석 소개팅 매칭을 가정하여 제작한 웹 기반 신청 폼입니다.",

          "한국 청춘 로맨스 웹툰을 콘셉트로, 일반적인 설문 양식을 캐릭터와 대화하며 진행하는 인터랙티브 경험으로 재구성했습니다."
        ]
      },
      {
        label: "DESIGN & IMPLEMENTATION",
        title: "설문을 하나의 이야기로",

        paragraphs: [
          "AI 도구를 활용해 큐피드 리오 캐릭터의 다양한 표정과 동작 이미지를 제작하고, 질문의 맥락에 맞게 배치했습니다.",

          "HTML과 CSS를 사용해 말풍선, 선택 상태 변화, 캐릭터 애니메이션 및 반응형 레이아웃을 구현했습니다.",

          "사용자가 자신의 기본 정보와 선호하는 상대의 조건을 단계적으로 입력할 수 있도록 구성했습니다."
        ]
      },
      {
        label: "MY ROLE",
        title: "Web Design · HTML/CSS · AI-assisted Visual Design",

        paragraphs: [
          "웹사이트 콘셉트와 사용자 경험을 기획하고, AI 도구를 활용해 캐릭터 이미지를 제작했습니다.",

          "HTML/CSS 기반 인터페이스를 구현하고 CSS 애니메이션과 반응형 디자인을 적용했습니다."
        ]
      }
    ],

    gallery: [
      {
        src: image("form_2.png"),
        caption: "Character-guided Introduction",
        layout: "half"
      },
      {
        src: image("form_4.png"),
        caption: "Matching Form · Interaction",
        layout: "half"
      },
      {
        src: image("form_6.png"),
        caption: "Chapter-based User Experience",
        layout: "half"
      },
      {
        src: image("form_8.png"),
        caption: "Final Screen",
        layout: "half"
      }
    ],

    documents: []
  },


  /* =======================================================
     PROJECT 08 — WHERE DOES CREATION HAPPEN?
     ======================================================= */

  {
    id: "where-does-creation-happen",
    number: "08",
    category: "projects",
    year: "2026",

    title: "Where Does Creation Happen?",

    subtitle:
      "Data Sonification · Human–AI Interaction",

    tagline:
      "식물 생리 데이터의 소리화를 통해 탐구하는 AI 시대의 작곡과 인간의 의사결정",

    thumbnail: image("LLLounge.png"),
    hero: image("LLLounge.png"),

    heroCaption:
      "Where Does Creation Happen? · Exhibition Concept Visualization",

    cardDescription:
      "식물 생리 데이터를 음악으로 변환하는 과정에서 인간의 해석과 의사결정을 탐구하는 참여형 전시",

    summary:
      "AI가 음악을 생성하는 시대에, 작곡은 무엇을 의미할까요? 식물 생리 데이터를 음악으로 변환하는 과정에 관람자가 직접 참여하도록 설계하여, 창작에서 기술과 인간의 의사결정이 각각 어떤 역할을 하는지 탐구하는 전시를 기획하고 있습니다.",

    type:
      "Interactive Exhibition Concept",

    affiliation:
      "LLLounge Seoul · Exhibition in Development",

    role:
      "Concept Planning · Interaction Design · Creative Coding",

    tools:
      "Data Sonification · Web Interaction · Creative Computing",

    status:
      "Concept Development · In Development",

    sections: [
      {
        label: "CONCEPT",
        title: "AI 시대에 작곡은 무엇을 의미할까요?",

        paragraphs: [
          "음악을 만들어내는 기술이 점차 자동화되면서, 창작 과정에서 인간의 역할과 AI의 개입 범위에 관한 새로운 질문이 생겨나고 있습니다.",

          "이 프로젝트는 이러한 문제의식에서 출발해 식물 생리 데이터를 음악으로 변환하는 과정에 주목합니다.",

          "식물의 반응 자체는 음악이 아니지만, 인간이 데이터의 의미를 해석하고 이를 음높이, 리듬, 음색 등의 음악적 요소에 연결하는 순간 새로운 표현이 만들어집니다.",

          "관람자가 데이터의 음악적 변환 과정에 직접 개입하도록 설계함으로써, 창작에서 기술과 인간의 의사결정이 각각 어떤 역할을 하는지 탐구하고자 합니다."
        ]
      },
      {
        label: "CENTRAL QUESTION",
        title: "음악이 만들어지는 과정에서 인간은 무엇을 결정해야 하는가?",

        paragraphs: [
          "이 전시는 하나의 정답을 제시하기보다, AI 시대에 작곡과 창작의 의미를 관람자 스스로 질문하도록 하는 참여형 전시를 목표로 합니다."
        ]
      },
      {
        label: "INTERACTION CONCEPT",
        title: "From Plant Data to Musical Decisions",

        paragraphs: [
          "관람객이 식물 생리 데이터와 음악적 요소의 연결 방식을 선택하고, 서로 다른 매핑에 따라 음악이 어떻게 달라지는지 경험할 수 있는 인터랙션을 구상하고 있습니다.",

          "데이터를 단순히 소리로 출력하는 것을 넘어, 어떤 데이터에 주목하고 어떤 음악적 표현을 선택할 것인지에 대한 인간의 판단을 전시 경험의 중심에 두고자 합니다."
        ]
      },
      {
        label: "STATUS",
        title: "Exhibition in Development",

        paragraphs: [
          "현재 전시 콘셉트와 관람객 참여 방식, 데이터 소리화 인터랙션을 구체화하고 있는 단계입니다. 전시 구현 및 실제 개최가 완료된 프로젝트는 아닙니다."
        ]
      }
    ],

    gallery: [],

    documents: []
  }

];


/* =========================================================
   04. HTML HELPERS
   반복되는 HTML 구조를 만드는 함수
   ========================================================= */

/*
  이미지에 문제가 생겼을 때 대체 텍스트 표시
*/
function imageFallback(event) {
  const img = event.target;

  if (!(img instanceof HTMLImageElement)) return;

  img.style.display = "none";

  const parent = img.parentElement;

  if (parent && !parent.querySelector(".missing-image")) {
    const fallback = document.createElement("div");

    fallback.className = "missing-image";
    fallback.textContent = "IMAGE NOT AVAILABLE";

    fallback.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 160px;
      padding: 20px;
      color: #77786F;
      font: 700 11px Archivo, sans-serif;
      letter-spacing: .08em;
      text-align: center;
    `;

    parent.appendChild(fallback);
  }
}

/*
  일반 이미지 생성
*/
function renderImage(src, alt, className = "") {
  return `
    <img
      src="${escapeHTML(src)}"
      alt="${escapeHTML(alt)}"
      class="${escapeHTML(className)}"
      loading="lazy"
    >
  `;
}

/*
  연구 및 프로젝트 상세 섹션
*/
function renderDetailSection(section, index) {
  const paragraphs = (section.paragraphs || [])
    .map((paragraph) => `
      <p>${formatText(paragraph)}</p>
    `)
    .join("");

  return `
    <section class="detail-section">

      <div class="detail-section-index">
        ${String(index + 1).padStart(2, "0")}
        / ${escapeHTML(section.label)}
      </div>

      <div class="detail-section-body">

        <h2 class="detail-section-title">
          ${escapeHTML(section.title)}
        </h2>

        ${paragraphs}

      </div>

    </section>
  `;
}

/*
  프로젝트 이미지 갤러리
*/
function renderGallery(gallery = []) {
  if (!gallery.length) return "";

  const items = gallery.map((item, index) => {
    const layout = ["full", "wide", "narrow", "half"]
      .includes(item.layout)
      ? item.layout
      : "half";

    return `
      <div class="gallery-item ${layout}">

        <figure>

          <button
            class="gallery-image-button"
            type="button"
            data-lightbox-src="${escapeHTML(item.src)}"
            data-lightbox-caption="${escapeHTML(item.caption)}"
            aria-label="Enlarge image: ${escapeHTML(item.caption)}"
          >
            ${renderImage(item.src, item.caption)}
          </button>

          <figcaption class="gallery-caption">

            <span>
              ${escapeHTML(item.caption)}
            </span>

            <span class="gallery-caption-index">
              ${String(index + 1).padStart(2, "0")}
            </span>

          </figcaption>

        </figure>

      </div>
    `;
  }).join("");

  return `
    <section
      class="detail-gallery"
      aria-label="Project image gallery"
    >
      ${items}
    </section>
  `;
}

/*
  PDF 보기 및 다운로드 링크
*/
function renderDocuments(documents = []) {
  if (!documents.length) return "";

  const links = documents.map((item, index) => {
    const downloadAttribute = item.download
      ? "download"
      : 'target="_blank" rel="noopener noreferrer"';

    return `
      <a
        class="document-link ${index === 0 ? "primary" : ""}"
        href="${escapeHTML(item.file)}"
        ${downloadAttribute}
      >
        ${escapeHTML(item.label)}
      </a>
    `;
  }).join("");

  return `
    <div class="detail-document-links">
      ${links}
    </div>
  `;
}

/*
  프로젝트 메타데이터
*/
function renderMeta(label, value) {
  if (!value) return "";

  return `
    <div class="detail-meta-group">

      <div class="detail-meta-label">
        ${escapeHTML(label)}
      </div>

      <div class="detail-meta-value">
        ${escapeHTML(value)}
      </div>

    </div>
  `;
}


/* =========================================================
   05. ABOUT PAGE
   ========================================================= */

function renderEditorialRows(items) {
  return items.map((item) => `
    <div class="editorial-row">

      <div class="editorial-date">
        ${escapeHTML(item.date)}
      </div>

      <div class="editorial-name">
        ${escapeHTML(item.name)}
      </div>

      <div class="editorial-description">
        ${escapeHTML(item.description)}
      </div>

    </div>
  `).join("");
}

function renderAbout() {
  const introHTML = aboutParagraphs
    .map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`)
    .join("");

  const interestHTML = interests
    .map((interest) => `
      <span class="interest-tag">
        ${escapeHTML(interest)}
      </span>
    `)
    .join("");

  app.innerHTML = `
    <div class="page-container about-page">

      <!-- ABOUT HERO -->

      <section class="about-hero">
      
<!-- ABSTRACT BOTANICAL ARTWORK -->
<!-- 식물의 형태 × 인쇄 질감 × 연결되는 궤적 -->

<div class="hero-artwork" aria-hidden="true">

  <svg
    viewBox="0 0 500 550"
    xmlns="http://www.w3.org/2000/svg"
  >

    <defs>
      <!-- 거친 리소그래프 인쇄 질감 -->
      <filter id="riso-grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.42"
          numOctaves="3"
          seed="8"
          result="noise"
        />

        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale="5"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>

      <!-- 잉크 입자 패턴 -->
      <pattern
        id="print-dots"
        width="5"
        height="5"
        patternUnits="userSpaceOnUse"
      >
        <circle
          cx="1"
          cy="1"
          r="0.7"
          fill="#F4F0E8"
          opacity="0.45"
        />
      </pattern>

    </defs>

    <!-- SAGE: 겹쳐진 인쇄 원판 -->

    <ellipse
      cx="240"
      cy="270"
      rx="160"
      ry="195"
      fill="#A3AD98"
      opacity="0.55"
      transform="rotate(-23 240 270)"
      filter="url(#riso-grain)"
    />

    <ellipse
      cx="240"
      cy="270"
      rx="160"
      ry="195"
      fill="url(#print-dots)"
      opacity="0.55"
      transform="rotate(-23 240 270)"
    />

    <!-- RUST: 추상적인 다섯 잎 꽃 -->

    <g
      fill="#A65A43"
      filter="url(#riso-grain)"
      transform="translate(270 250) rotate(-15)"
    >

      <ellipse
        cx="0"
        cy="-105"
        rx="52"
        ry="117"
      />

      <ellipse
        cx="0"
        cy="-105"
        rx="52"
        ry="117"
        transform="rotate(72)"
      />

      <ellipse
        cx="0"
        cy="-105"
        rx="52"
        ry="117"
        transform="rotate(144)"
      />

      <ellipse
        cx="0"
        cy="-105"
        rx="52"
        ry="117"
        transform="rotate(216)"
      />

      <ellipse
        cx="0"
        cy="-105"
        rx="52"
        ry="117"
        transform="rotate(288)"
      />

    </g>

    <!-- 꽃 중앙 -->

    <circle
      cx="270"
      cy="250"
      r="21"
      fill="#292A27"
    />

    <!-- 가느다란 궤적: 데이터와 연결을 표현 -->

    <ellipse
      cx="255"
      cy="275"
      rx="225"
      ry="90"
      fill="none"
      stroke="#292A27"
      stroke-width="1.5"
      transform="rotate(-38 255 275)"
    />

    <!-- 검은색 반짝임 -->

    <path
      d="
        M 93 410
        Q 100 440 130 447
        Q 100 454 93 484
        Q 86 454 56 447
        Q 86 440 93 410
        Z
      "
      fill="#292A27"
    />

    <!-- 작은 별 -->

    <path
      d="
        M 405 68
        Q 410 88 430 93
        Q 410 98 405 118
        Q 400 98 380 93
        Q 400 88 405 68
        Z
      "
      fill="#292A27"
    />

  </svg>

</div>


        <div class="hero-topline">

          <span class="eyebrow">
            ABOUT / 001
          </span>

          <span class="eyebrow">
            PORTFOLIO · 2026
          </span>

        </div>

        <h1 class="hero-title">
          <span class="title-line">YEWON</span>
          <span class="title-line">
            CHUNG<span class="title-accent">.</span>
          </span>
        </h1>

        <div class="about-intro-grid">

          <!-- 왼쪽: 작은 프로필 사진 -->

          <div class="about-identity">

            <div class="contributor">

              <img
                class="profile-photo"
                src="${image("profile.jpg")}"
                alt="Portrait of Yewon Chung"
              >

              <div class="contributor-info">

                <h2 class="contributor-name">
                  Yewon Chung
                </h2>

                <p class="contributor-role">
                  Undergraduate Student<br>
                  Seoul National University
                </p>

              </div>

            </div>

            <div class="identity-meta">

              <p>
                <strong>STUDY</strong>
                Plant Sciences
              </p>

              <p>
                <strong>SECOND MAJOR</strong>
                Vocational Education and Workforce Development
              </p>

              <p>
                <strong>INTERESTS</strong>
                Service Design · HCI · Creative Technology
              </p>

            </div>

          </div>

          <!-- 오른쪽: 확정 자기소개 -->

          <div class="about-statement">
            ${introHTML}
          </div>

        </div>

      </section>


      <!-- INTERESTS -->

      <section class="about-interests">

        <div class="editorial-label">
          CURRENTLY EXPLORING
        </div>

        <div class="interests-list">
          ${interestHTML}
        </div>

      </section>


      <!-- EXPERIENCES -->

      <section class="editorial-section">

        <div class="editorial-section-header">

          <h2 class="editorial-section-title">
            Experiences
          </h2>

          <span class="editorial-section-count">
            ${String(experiences.length).padStart(2, "0")}
          </span>

        </div>

        <div class="editorial-list">
          ${renderEditorialRows(experiences)}
        </div>

      </section>


      <!-- AWARDS -->

      <section class="editorial-section">

        <div class="editorial-section-header">

          <h2 class="editorial-section-title">
            Awards
          </h2>

          <span class="editorial-section-count">
            ${String(awards.length).padStart(2, "0")}
          </span>

        </div>

        <div class="editorial-list">
          ${renderEditorialRows(awards)}
        </div>

      </section>


      <!-- CONTACT -->

      <section class="about-contact">

        <div>

          <div class="eyebrow">
            CONTACT / SAY HELLO
          </div>

          <h2 class="about-contact-title">
            LET'S<br>
            CONNECT<span style="color:var(--rust)">.</span>
          </h2>

        </div>

        <a
          class="contact-link"
          href="mailto:yppah32@snu.ac.kr"
        >
          yppah32@snu.ac.kr ↗
        </a>

      </section>

    </div>
  `;
}


/* =========================================================
   06. WORKS PAGE
   ========================================================= */

/*
  현재 선택한 필터
  all / research / projects
*/
let activeFilter = "all";

/*
  프로젝트 카드 생성
*/
function renderWorkCard(project) {
  return `
    <article class="work-card">

      <a
        class="work-card-link"
        href="#project/${encodeURIComponent(project.id)}"
      >

        <div class="work-card-image">

          ${renderImage(
            project.thumbnail,
            project.title
          )}

          <span class="work-card-number">
            ${project.number}
          </span>

        </div>

        <div class="work-card-info">

          <div>

            <div class="work-card-category">
              ${escapeHTML(project.category)}
              / ${escapeHTML(project.year)}
            </div>

            <h2 class="work-card-title">
              ${escapeHTML(project.title)}
            </h2>

            <p class="work-card-subtitle">
              ${escapeHTML(project.cardDescription)}
            </p>

          </div>

          <span class="work-card-arrow" aria-hidden="true">
            ↗
          </span>

        </div>

      </a>

    </article>
  `;
}

/*
  필터에 맞는 프로젝트만 표시
*/
function getFilteredProjects() {
  if (activeFilter === "all") {
    return projects;
  }

  return projects.filter(
    (project) => project.category === activeFilter
  );
}

/*
  Works 그리드 업데이트
*/
function updateWorksGrid() {
  const grid = document.getElementById("works-grid");
  const total = document.getElementById("works-total");

  if (!grid) return;

  const filtered = getFilteredProjects();

  grid.innerHTML = filtered.map(renderWorkCard).join("");

  if (total) {
    total.textContent =
      `${String(filtered.length).padStart(2, "0")} WORKS`;
  }

  document.querySelectorAll(".filter-button")
    .forEach((button) => {
      const isActive = button.dataset.filter === activeFilter;

      button.classList.toggle("active", isActive);

      button.setAttribute(
        "aria-pressed",
        String(isActive)
      );
    });
}

/*
  Works 페이지 전체
*/
function renderWorks() {
  app.innerHTML = `
    <div class="page-container works-page">

      <section class="works-heading">

        <div class="hero-topline">

          <span class="eyebrow">
            SELECTED WORKS / 002
          </span>

          <span class="eyebrow">
            2025—2026
          </span>

        </div>

        <h1 class="works-title">
          WORKS<span style="color:var(--rust)">.</span>
        </h1>

        <div class="works-subtitle">

          <span>
            A curated archive of research, design,
            and creative experiments.
          </span>

          <span>
            RESEARCH · PROJECTS
          </span>

        </div>

      </section>


      <!-- 필터 -->

      <div class="works-toolbar">

        <div
          class="works-filters"
          role="group"
          aria-label="Filter projects"
        >

          <button
            type="button"
            class="filter-button"
            data-filter="all"
          >
            ALL
          </button>

          <button
            type="button"
            class="filter-button"
            data-filter="research"
          >
            RESEARCH
          </button>

          <button
            type="button"
            class="filter-button"
            data-filter="projects"
          >
            PROJECTS
          </button>

        </div>

        <span class="works-total" id="works-total">
          08 WORKS
        </span>

      </div>


      <!-- 프로젝트 카드 -->

      <div class="works-grid" id="works-grid"></div>

    </div>
  `;

  updateWorksGrid();
}


/* =========================================================
   07. PROJECT DETAIL PAGE
   ========================================================= */

function renderProject(project) {
  if (!project) {
    renderNotFound();
    return;
  }

  const projectIndex = projects.findIndex(
    (item) => item.id === project.id
  );

  const previousProject =
    projects[(projectIndex - 1 + projects.length) % projects.length];

  const nextProject =
    projects[(projectIndex + 1) % projects.length];

  const sectionHTML = project.sections
    .map(renderDetailSection)
    .join("");

  const galleryHTML = renderGallery(project.gallery);

  const documentHTML = renderDocuments(project.documents);

  let relatedHTML = "";

  if (project.relatedProject) {
    relatedHTML = `
      <div class="detail-document-links">

        <a
          class="document-link"
          href="#project/${encodeURIComponent(project.relatedProject.id)}"
        >
          ${escapeHTML(project.relatedProject.label)}
        </a>

      </div>
    `;
  }

  app.innerHTML = `
    <div class="page-container detail-page">

      <!-- 뒤로가기 -->

      <a class="detail-back" href="#works">
        ← BACK TO WORKS
      </a>


      <!-- 프로젝트 제목 -->

      <header class="detail-header">

        <div class="detail-header-top">

          <span class="detail-category">
            ${escapeHTML(project.category)}
            / ${escapeHTML(project.number)}
          </span>

          <span class="detail-year">
            ${escapeHTML(project.year)}
          </span>

        </div>

        <h1 class="detail-title">
          ${escapeHTML(project.title)}
        </h1>

        <p class="detail-tagline">
          ${escapeHTML(project.tagline)}
        </p>

        <p class="detail-summary">
          ${escapeHTML(project.summary)}
        </p>

      </header>


      <!-- 대표 이미지 -->

      <figure class="detail-hero">

        ${renderImage(
          project.hero,
          project.heroCaption
        )}

        <figcaption>
          ${escapeHTML(project.heroCaption)}
        </figcaption>

      </figure>


      <!-- 프로젝트 개요 및 역할 -->

      <section class="detail-overview">

        <aside class="detail-sidebar">

          ${renderMeta("YEAR", project.year)}

          ${renderMeta("TYPE", project.type)}

          ${renderMeta("AFFILIATION", project.affiliation)}

          ${renderMeta("MY ROLE", project.role)}

          ${renderMeta("TOOLS / FOCUS", project.tools)}

          ${renderMeta("STATUS", project.status)}

        </aside>

        <div class="detail-intro">

          <div
            class="detail-section-kicker"
            style="margin-bottom:20px"
          >
            PROJECT OVERVIEW
          </div>

          <p>${escapeHTML(project.subtitle)}</p>

          <p>${escapeHTML(project.summary)}</p>

          ${documentHTML}

          ${relatedHTML}

        </div>

      </section>


      <!-- 상세 원고 -->

      <div class="detail-content">
        ${sectionHTML}
      </div>


      <!-- 프로젝트 이미지 -->

      ${galleryHTML}


      <!-- 하단 프로젝트 이동 -->

      <nav
        class="project-navigation"
        aria-label="Project navigation"
      >

        <a
          href="#project/${encodeURIComponent(previousProject.id)}"
        >
          ← PREVIOUS PROJECT
        </a>

        <a href="#works">
          ALL WORKS ↑
        </a>

        <a
          href="#project/${encodeURIComponent(nextProject.id)}"
        >
          NEXT PROJECT →
        </a>

      </nav>

    </div>
  `;
}


/* =========================================================
   08. NOT FOUND
   ========================================================= */

function renderNotFound() {
  app.innerHTML = `
    <div
      class="page-container"
      style="padding-top:100px;padding-bottom:150px"
    >

      <p class="eyebrow">
        404 / NOT FOUND
      </p>

      <h1
        style="
          font-family:var(--font-display);
          font-size:clamp(55px,10vw,140px);
          font-weight:900;
          letter-spacing:-.09em;
          line-height:1;
          margin:25px 0;
        "
      >
        NOT FOUND.
      </h1>

      <p style="margin-bottom:35px">
        요청한 프로젝트를 찾을 수 없습니다.
      </p>

      <a class="document-link primary" href="#works">
        BACK TO WORKS ↗
      </a>

    </div>
  `;
}


/* =========================================================
   09. NAVIGATION & ROUTING

   #about
   #works
   #project/project-id

   URL 해시를 활용하므로
   별도 서버 라우팅 없이 작동합니다.
   ========================================================= */

/*
  현재 페이지에 따라 상단 메뉴 활성화
*/
function updateNavigation(page) {
  document.querySelectorAll("[data-nav]")
    .forEach((link) => {
      const isActive = link.dataset.nav === page;

      link.classList.toggle("active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
}

/*
  URL에 따라 페이지 렌더링
*/
function route() {
  const hash = window.location.hash || "#about";

  let path;

  try {
    path = decodeURIComponent(hash.slice(1));
  } catch (error) {
    renderNotFound();
    updateNavigation("");
    return;
  }

  if (path === "about" || path === "") {
    renderAbout();
    updateNavigation("about");

    document.title =
      "About — Yewon Chung";
  }

  else if (path === "works") {
    renderWorks();
    updateNavigation("works");

    document.title =
      "Works — Yewon Chung";
  }

  else if (path.startsWith("project/")) {
    const projectId = path.slice("project/".length);

    const project = projects.find(
      (item) => item.id === projectId
    );

    renderProject(project);
    updateNavigation("works");

    document.title = project
      ? `${project.title} — Yewon Chung`
      : "Not Found — Yewon Chung";
  }

  else {
    renderNotFound();
    updateNavigation("");

    document.title =
      "Not Found — Yewon Chung";
  }

  /*
    페이지 전환 시 맨 위로 이동
  */
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto"
  });
}


/* =========================================================
   10. FILTER INTERACTION
   ========================================================= */

document.addEventListener("click", (event) => {
  const filterButton = event.target.closest(
    ".filter-button"
  );

  if (!filterButton) return;

  const requestedFilter = filterButton.dataset.filter;

  if (!["all", "research", "projects"].includes(requestedFilter)) {
    return;
  }

  activeFilter = requestedFilter;

  updateWorksGrid();
});


/* =========================================================
   11. IMAGE LIGHTBOX
   ========================================================= */

const lightbox = document.getElementById("lightbox");

const lightboxImage = lightbox.querySelector("img");

const lightboxCaption = lightbox.querySelector(
  ".lightbox-caption"
);

const lightboxClose = lightbox.querySelector(
  ".lightbox-close"
);

/*
  확대창 열기
*/
function openLightbox(src, caption) {
  lightboxImage.src = src;
  lightboxImage.alt = caption;

  lightboxCaption.textContent = caption;

  if (!lightbox.open) {
    lightbox.showModal();
  }
}

/*
  확대창 닫기
*/
function closeLightbox() {
  if (lightbox.open) {
    lightbox.close();
  }
}

/*
  프로젝트 이미지 클릭
*/
document.addEventListener("click", (event) => {
  const imageButton = event.target.closest(
    "[data-lightbox-src]"
  );

  if (!imageButton) return;

  const src = imageButton.dataset.lightboxSrc;
  const caption = imageButton.dataset.lightboxCaption || "";

  openLightbox(src, caption);
});

/*
  닫기 버튼
*/
lightboxClose.addEventListener("click", closeLightbox);

/*
  이미지 외부 영역 클릭 시 닫기
*/
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

/*
  확대창 닫힌 후 이미지 초기화
*/
lightbox.addEventListener("close", () => {
  lightboxImage.removeAttribute("src");
  lightboxCaption.textContent = "";
});


/* =========================================================
   12. IMAGE ERROR HANDLING
   ========================================================= */

document.addEventListener(
  "error",
  (event) => {
    if (event.target instanceof HTMLImageElement) {
      /*
        확대창 이미지는 대체 요소를 만들지 않습니다.
      */
      if (event.target === lightboxImage) return;

      imageFallback(event);
    }
  },
  true
);


/* =========================================================
   13. INITIALIZATION
   ========================================================= */

/*
  브라우저 뒤로가기 / 앞으로가기 지원
*/
window.addEventListener("hashchange", route);

/*
  최초 실행
*/
route();
