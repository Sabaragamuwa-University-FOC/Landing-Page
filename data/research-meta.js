/*
 * Content for the Research Project landing page.
 *
 * Everything on research-project.html that is not a project record lives here:
 * the selection rules, the internal supervisor list, and the batch cards.
 * Edit this file — you should not need to touch the HTML.
 */

/* ---------------------------------------------------------------------------
 * SELECTION RULES
 *
 * PLACEHOLDER TEXT — replace each `text` with the department's actual wording
 * before this page goes live. The headings below describe the kind of rule that
 * belongs in each slot; they are not official policy.
 *
 * `icon` is any lucide icon name: https://lucide.dev/icons
 * Add or remove entries freely; the grid reflows.
 * ------------------------------------------------------------------------ */
const RESEARCH_RULES = [
  {
    icon: "user",
    title: "One student, one project",
    text: "PLACEHOLDER — state the rule on individual ownership of a research project and whether any collaboration is permitted.",
  },
  {
    icon: "lightbulb",
    title: "Scope and originality",
    text: "PLACEHOLDER — state what makes a topic acceptable: originality, research contribution, and how it must differ from earlier batches' work.",
  },
  {
    icon: "user-check",
    title: "Choosing a supervisor",
    text: "PLACEHOLDER — state how a student approaches and confirms an internal supervisor, and the maximum number of students per supervisor.",
  },
  {
    icon: "file-text",
    title: "Proposal and approval",
    text: "PLACEHOLDER — state what must be submitted for the topic to be approved, and who approves it.",
  },
  {
    icon: "calendar-clock",
    title: "Deadlines and milestones",
    text: "PLACEHOLDER — state the key dates: topic registration, proposal defence, progress review, and final submission.",
  },
  {
    icon: "shield-check",
    title: "Ethics and academic integrity",
    text: "PLACEHOLDER — state the plagiarism policy, similarity thresholds, and any ethical clearance needed for studies involving human participants.",
  },
];

/* ---------------------------------------------------------------------------
 * INTERNAL SUPERVISORS
 *
 * Fill this in with the real staff list. Every field except `name` is optional
 * and is simply left out of the card when empty.
 *
 *   name        Display name, e.g. "Dr. S. Vasanthapriyan"
 *   title       Post, e.g. "Senior Lecturer"
 *   department  Department name
 *   email       Shown as a mail link
 *   photo       Path under images/, e.g. "images/staff/vasanthapriyan.jpg"
 *               Leave empty to show the person's initials instead.
 *   interests   Array of research areas, rendered as chips
 *   profile     External profile URL (faculty page, Scholar, ORCID)
 * ------------------------------------------------------------------------ */
const RESEARCH_SUPERVISORS = [
  // Example — delete this entry once real staff details are added:
  // {
  //   name: "Dr. S. Vasanthapriyan",
  //   title: "Senior Lecturer",
  //   department: "Department of Data Science",
  //   email: "priyan@appsc.sab.ac.lk",
  //   photo: "",
  //   interests: ["Software engineering", "Knowledge management"],
  //   profile: "",
  // },
];

/* ---------------------------------------------------------------------------
 * BATCHES
 *
 * `href` empty  -> the card renders as "Coming soon" and is not clickable.
 * `count` is shown on the card; set it to 0 when the batch has no data yet.
 * `book` is the abstract book PDF path, used by the download button.
 * ------------------------------------------------------------------------ */
const RESEARCH_BATCHES = [
  {
    batch: "SE 2020/2021",
    label: "20/21",
    year: "Presented August 2026",
    count: 58,
    href: "research-se-2021.html",
    book: "docs/Abstract_book_SE_SUSL_20_21_Batch.pdf",
    blurb: "Fifty-eight research projects spanning explainable AI, DevOps, requirements engineering, and software quality.",
  },
  {
    batch: "SE 2019/2020",
    label: "19/20",
    year: "",
    count: 0,
    href: "",
    book: "",
    blurb: "Abstracts for this batch have not been published to the site yet.",
  },
  {
    batch: "SE 2018/2019",
    label: "18/19",
    year: "",
    count: 0,
    href: "",
    book: "",
    blurb: "Abstracts for this batch have not been published to the site yet.",
  },
];
