function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function link(label, url) {
  const target = element("a", "inline-link", label);
  target.href = url;
  return target;
}

function renderList(id, items, render) {
  const container = document.getElementById(id);
  container.append(...items.map(render));
}

document.title = teamSite.name;
document.querySelectorAll("[data-name]").forEach((node) => { node.textContent = teamSite.name; });
document.getElementById("headline").textContent = teamSite.headline;
document.getElementById("intro").textContent = teamSite.intro;
if (teamSite.heroImage) {
  const image = element("img");
  image.alt = "";
  image.src = teamSite.heroImage;
  image.addEventListener("error", () => image.remove());
  document.getElementById("hero-art").append(image);
}

renderList("research-list", teamSite.research, (item) => {
  const card = element("article", "research-card");
  card.append(element("h3", "", item.title), element("p", "", item.description));
  if (item.url) card.append(link("了解" + item.title + " ↗", item.url));
  return card;
});

document.getElementById("project-title").textContent = teamSite.project.title;
document.getElementById("project-description").textContent = teamSite.project.description;
document.getElementById("project-example").textContent = teamSite.project.example;
renderList("project-steps", teamSite.project.steps, (step) => {
  const item = element("li");
  item.append(element("h4", "", step.title), element("p", "", step.description));
  return item;
});

renderList("work-list", teamSite.work, (item) => {
  const row = element("article", "work-row");
  const details = element("div");
  const heading = element("h3", "", item.url ? "" : item.title);
  if (item.url) heading.append(link(item.title + " ↗", item.url));
  details.append(heading, element("p", "", item.description));
  row.append(element("p", "work-type", item.type), details);
  return row;
});

renderList("people-list", teamSite.people, (person) => {
  const card = element("article", "person");
  const portrait = element("div", "portrait");
  portrait.setAttribute("aria-hidden", "true");
  if (person.photo) {
    const image = element("img");
    image.src = person.photo;
    image.alt = "";
    image.loading = "lazy";
    image.addEventListener("error", () => image.remove());
    portrait.append(image);
  }
  card.append(portrait, element("h3", "", person.name), element("p", "role", person.role), element("p", "", person.bio));
  if (person.url) card.append(link(person.name + "的个人主页 ↗", person.url));
  return card;
});

document.getElementById("people-empty").hidden = teamSite.people.length > 0;

document.getElementById("contact-copy").textContent = teamSite.contact.text;
if (teamSite.contact.email) {
  const contact = document.getElementById("contact-link");
  contact.href = "mailto:" + teamSite.contact.email;
  contact.hidden = false;
}
if (!teamSite.research.length) document.querySelector(".hero a").hidden = true;
