const employees = [
  {
    id: "ТО-0001",
    name: "Muzaffarov A'zam Baxtiyarovich",
    photo: "assets/photos/muzaffarov.jpg",
    role: "Технический инженер по освидетельствованию лифтов",
    credentialNo: "ТО-0001/2026",
    issueDate: "2026-08-19",
    validUntil: "2029-08-19",
    status: "ДЕЙСТВУЕТ",
    organization: "Специализированная организация по техническому освидетельствованию лифтов",
    certificates: [
      {
        no: "00270/2026",
        title: "O'z DSt ISO/IEC 17020:2019. Muvofiqlikni baholash. Inspeksiya o'tkazuvchi turli xil organlarning faoliyatiga doir talablar",
        issued: "2026-03-27",
        valid: "3 года",
        image: "assets/certificates/cert-00270-iso-muzaffarov.jpg"
      },
      {
        no: "00837/2026",
        title: "EN 81 turkumidagi standartlarga muvofiq liftlarni texnik ko'rikdan o'tkazish tartibi (Check-list asosida)",
        issued: "2026-06-12",
        valid: "3 года",
        image: "assets/certificates/cert-00837-en81-muzaffarov.jpg"
      }
    ]
  },
  {
    id: "ТО-0002",
    name: "Shukurov Botir Abdijaparovich",
    photo: "assets/photos/shukurov.jpg",
    role: "Технический инженер по освидетельствованию лифтов",
    credentialNo: "ТО-0002/2026",
    issueDate: "2026-08-19",
    validUntil: "2029-08-19",
    status: "ДЕЙСТВУЕТ",
    organization: "Специализированная организация по техническому освидетельствованию лифтов",
    certificates: [
      {
        no: "00271/2026",
        title: "O'z DSt ISO/IEC 17020:2019. Muvofiqlikni baholash. Inspeksiya o'tkazuvchi turli xil organlarning faoliyatiga doir talablar",
        issued: "2026-03-27",
        valid: "3 года",
        image: "assets/certificates/cert-00271-iso-shukurov.jpg"
      },
      {
        no: "00838/2026",
        title: "EN 81 turkumidagi standartlarga muvofiq liftlarni texnik ko'rikdan o'tkazish tartibi (Check-list asosida)",
        issued: "2026-06-12",
        valid: "3 года",
        image: "assets/certificates/cert-00838-en81-shukurov.jpg"
      }
    ]
  },
  {
    id: "ТО-0003",
    name: "Yuldashev Tursun Assatullayevich",
    photo: "assets/photos/yuldashev.jpg",
    role: "Технический инженер по освидетельствованию лифтов",
    credentialNo: "ТО-0003/2026",
    issueDate: "2026-08-19",
    validUntil: "2029-08-19",
    status: "ДЕЙСТВУЕТ",
    organization: "Специализированная организация по техническому освидетельствованию лифтов",
    certificates: [
      {
        no: "00272/2026",
        title: "O'z DSt ISO/IEC 17020:2019. Muvofiqlikni baholash. Inspeksiya o'tkazuvchi turli xil organlarning faoliyatiga doir talablar",
        issued: "2026-03-27",
        valid: "3 года",
        image: "assets/certificates/cert-00272-iso-yuldashev.jpg"
      },
      {
        no: "00841/2026",
        title: "EN 81 turkumidagi standartlarga muvofiq liftlarni texnik ko'rikdan o'tkazish tartibi (Check-list asosida)",
        issued: "2026-06-12",
        valid: "3 года",
        image: "assets/certificates/cert-00841-en81-yuldashev.jpg"
      }
    ]
  },
  {
    id: "ТО-0004",
    name: "G'ayratov Sanjar Nodir o'g'li",
    photo: "assets/photos/gayratov.jpg",
    role: "Технический инженер по освидетельствованию лифтов",
    credentialNo: "ТО-0004/2026",
    issueDate: "2026-08-19",
    validUntil: "2029-08-19",
    status: "ДЕЙСТВУЕТ",
    organization: "Специализированная организация по техническому освидетельствованию лифтов",
    certificates: [
      {
        no: "00273/2026",
        title: "O'z DSt ISO/IEC 17020:2019. Muvofiqlikni baholash. Inspeksiya o'tkazuvchi turli xil organlarning faoliyatiga doir talablar",
        issued: "2026-03-27",
        valid: "3 года",
        image: "assets/certificates/cert-00273-iso-gayratov.jpg"
      },
      {
        no: "00839/2026",
        title: "EN 81 turkumidagi standartlarga muvofiq liftlarni texnik ko'rikdan o'tkazish tartibi (Check-list asosida)",
        issued: "2026-06-12",
        valid: "3 года",
        image: "assets/certificates/cert-00839-en81-gayratov.jpg"
      }
    ]
  },
  {
    id: "ТО-0005",
    name: "Mustafin Fail Fanilevich",
    photo: "assets/photos/mustafin.jpg",
    role: "Технический инженер по освидетельствованию лифтов",
    credentialNo: "ТО-0005/2026",
    issueDate: "2026-08-19",
    validUntil: "2029-08-19",
    status: "ДЕЙСТВУЕТ",
    organization: "Специализированная организация по техническому освидетельствованию лифтов",
    certificates: [
      {
        no: "00713/2026",
        title: "O'z DSt ISO/IEC 17020:2019. Muvofiqlikni baholash. Inspeksiya o'tkazuvchi turli xil organlarning faoliyatiga doir talablar",
        issued: "2026-05-22",
        valid: "3 года",
        image: "assets/certificates/cert-00713-iso-mustafin.jpg"
      },
      {
        no: "00840/2026",
        title: "EN 81 turkumidagi standartlarga muvofiq liftlarni texnik ko'rikdan o'tkazish tartibi (Check-list asosida)",
        issued: "2026-06-12",
        valid: "3 года",
        image: "assets/certificates/cert-00840-en81-mustafin.jpg"
      }
    ]
  },
  {
    id: "ТО-0006",
    name: "Aitov Aleksandr Rinatovich",
    role: "Технический инженер по освидетельствованию лифтов",
    credentialNo: "ТО-0006/2026",
    issueDate: "2026-08-19",
    validUntil: "2029-08-19",
    status: "ДЕЙСТВУЕТ",
    organization: "Специализированная организация по техническому освидетельствованию лифтов",
    certificates: [
      {
        no: "00811/2026",
        title: "O'z DSt ISO/IEC 17020:2019. Muvofiqlikni baholash. Inspeksiya o'tkazuvchi turli xil organlarning faoliyatiga doir talablar",
        issued: "2026-06-12",
        valid: "3 года",
        image: "assets/certificates/cert-00811-iso-aitov.jpg"
      }
    ]
  },
  {
    id: "ТО-0007",
    name: "Dusmatov Akmal Abdukarimovich",
    role: "Технический инженер по освидетельствованию лифтов",
    credentialNo: "ТО-0007/2026",
    issueDate: "2026-08-19",
    validUntil: "2029-08-19",
    status: "ДЕЙСТВУЕТ",
    organization: "Специализированная организация по техническому освидетельствованию лифтов",
    certificates: [
      {
        no: "00812/2026",
        title: "O'z DSt ISO/IEC 17020:2019. Muvofiqlikni baholash. Inspeksiya o'tkazuvchi turli xil organlarning faoliyatiga doir talablar",
        issued: "2026-06-12",
        valid: "3 года",
        image: "assets/certificates/cert-00812-iso-dusmatov.jpg"
      }
    ]
  },
  {
    id: "ТО-0008",
    name: "Tursunov Dilshod Xabibullayevich",
    role: "Технический инженер по освидетельствованию лифтов",
    credentialNo: "ТО-0008/2026",
    issueDate: "2026-08-19",
    validUntil: "2029-08-19",
    status: "ДЕЙСТВУЕТ",
    organization: "Специализированная организация по техническому освидетельствованию лифтов",
    certificates: [
      {
        no: "00813/2026",
        title: "O'z DSt ISO/IEC 17020:2019. Muvofiqlikni baholash. Inspeksiya o'tkazuvchi turli xil organlarning faoliyatiga doir talablar",
        issued: "2026-06-12",
        valid: "3 года",
        image: "assets/certificates/cert-00813-iso-tursunov.jpg"
      }
    ]
  }
];

const journal = [
  {
    employeeId: "ТО-0001",
    object: "K-48",
    address: "по техническому паспорту объекта",
    liftNo: "K-48",
    kind: "Техническое освидетельствование",
    date: "2026-08-19",
    result: "Связано с индивидуальным ID работника",
    document: "assets/documents/lift-k48-technical.pdf"
  },
  {
    employeeId: "ТО-0002",
    object: "K-48",
    address: "по техническому паспорту объекта",
    liftNo: "K-48",
    kind: "Техническое освидетельствование",
    date: "2026-08-19",
    result: "Связано с индивидуальным ID работника",
    document: "assets/documents/lift-k48-technical.pdf"
  }
];

let selectedId = "";

function byId(id) {
  return document.getElementById(id);
}

function formatDate(value) {
  return new Intl.DateTimeFormat("ru-RU").format(new Date(`${value}T00:00:00`));
}

function statusClass(status) {
  const normalized = status.toLowerCase();
  if (normalized.includes("приост")) return "suspended";
  if (normalized.includes("аннул")) return "revoked";
  if (normalized.includes("истек")) return "expired";
  return "active";
}

function initials(name) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function currentUrlFor(id) {
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = "";
  url.searchParams.set("id", id);
  return url.toString();
}

function findEmployee(query) {
  const q = (query || "").trim().toLowerCase();
  if (!q) return employees[0];
  return employees.find((employee) => {
    const haystack = [
      employee.id,
      employee.name,
      employee.credentialNo,
      ...employee.certificates.map((cert) => cert.no)
    ].join(" ").toLowerCase();
    return haystack.includes(q);
  });
}

function renderQuickList() {
  byId("quickList").innerHTML = employees
    .map((employee) => `<button type="button" data-id="${employee.id}">${employee.id}</button>`)
    .join("");
}

function renderRegistry() {
  byId("registryRows").innerHTML = employees
    .map((employee) => `
      <tr data-id="${employee.id}">
        <td><strong>${employee.id}</strong></td>
        <td>${employee.name}</td>
        <td>${employee.role}</td>
        <td>${employee.certificates.map((cert) => cert.no).join("<br>")}</td>
        <td>${employee.credentialNo}<br>${formatDate(employee.issueDate)}</td>
        <td>до ${formatDate(employee.validUntil)}</td>
        <td><span class="status-badge ${statusClass(employee.status)}">${employee.status}</span></td>
      </tr>
    `)
    .join("");
}

function renderJournal() {
  byId("journalList").innerHTML = journal
    .map((entry) => {
      const employee = employees.find((item) => item.id === entry.employeeId);
      return `
        <article class="journal-item">
          <strong>${entry.date} · ${entry.object} · ${entry.liftNo}</strong>
          <span>${employee?.name || entry.employeeId}</span>
          <p class="muted">${entry.kind}. ${entry.result}. Адрес: ${entry.address}.</p>
          <a class="open-link" href="${entry.document}" target="_blank" rel="noopener">Документ объекта</a>
        </article>
      `;
    })
    .join("");
}

function renderQr(employee) {
  const qr = byId("qrCode");
  qr.innerHTML = "";
  if (window.QRCode) {
    new QRCode(qr, {
      text: currentUrlFor(employee.id),
      width: 180,
      height: 180,
      correctLevel: QRCode.CorrectLevel.M
    });
  } else {
    qr.textContent = "QR временно недоступен";
  }
  byId("qrLink").textContent = currentUrlFor(employee.id);
}

function renderEmployee(employee) {
  selectedId = employee.id;
  byId("searchInput").value = employee.id;
  byId("result").innerHTML = `
    <article class="identity-panel">
      <div class="status-strip">
        <div>
          <p class="eyebrow">Удостоверение ${employee.credentialNo}</p>
          <strong>Проверка выполнена в электронном реестре</strong>
        </div>
        <span class="status-badge ${statusClass(employee.status)}">${employee.status}</span>
      </div>
      <div class="identity-grid">
        <div class="employee-card">
          <div class="employee-head">
            <div class="avatar" aria-label="Фото работника">${
              employee.photo
                ? `<img src="${employee.photo}" alt="Фото ${employee.name}">`
                : initials(employee.name)
            }</div>
            <div>
              <h2 class="employee-name">${employee.name}</h2>
              <p class="employee-role">${employee.role}</p>
            </div>
          </div>
          <div class="data-grid">
            <div class="data-item"><span>Идентификационный ID</span><strong>${employee.id}</strong></div>
            <div class="data-item"><span>Организация</span><strong>${employee.organization}</strong></div>
            <div class="data-item"><span>Дата выдачи</span><strong>${formatDate(employee.issueDate)}</strong></div>
            <div class="data-item"><span>Действительно до</span><strong>${formatDate(employee.validUntil)}</strong></div>
            <div class="data-item"><span>Квалификация</span><strong>${employee.certificates.length} сертификат(а)</strong></div>
            <div class="data-item"><span>Ограничение</span><strong>Не подлежит передаче другому лицу</strong></div>
          </div>
        </div>
        <aside class="qr-box">
          <div id="qrCode"></div>
          <strong>QR для проверки</strong>
          <span class="qr-link" id="qrLink"></span>
        </aside>
      </div>
      <div class="certificate-grid">
        ${employee.certificates
          .map((cert) => `
            <article class="certificate-card">
              <img src="${cert.image}" alt="Сертификат ${cert.no} ${employee.name}">
              <div>
                <h3>Сертификат N ${cert.no}</h3>
                <p>${cert.title}</p>
                <p>Дата окончания курса: ${formatDate(cert.issued)}. Срок: ${cert.valid}.</p>
                <a class="open-link" href="${cert.image}" target="_blank" rel="noopener">Открыть сертификат</a>
              </div>
            </article>
          `)
          .join("")}
      </div>
    </article>
  `;
  renderQr(employee);
  history.replaceState(null, "", `?id=${encodeURIComponent(employee.id)}`);
}

function renderNotFound(query) {
  byId("result").innerHTML = `
    <article class="identity-panel">
      <div class="status-strip">
        <strong>Запись не найдена</strong>
        <span class="status-badge revoked">НЕДЕЙСТВИТЕЛЬНО</span>
      </div>
      <p class="muted">По запросу «${query}» нет работника в электронном реестре. До подтверждения личности и статуса допуск к работам не допускается.</p>
    </article>
  `;
}

function bindEvents() {
  byId("searchForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const query = byId("searchInput").value;
    const employee = findEmployee(query);
    employee ? renderEmployee(employee) : renderNotFound(query);
  });

  byId("quickList").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-id]");
    if (!button) return;
    renderEmployee(findEmployee(button.dataset.id));
  });

  byId("registryRows").addEventListener("click", (event) => {
    const row = event.target.closest("tr[data-id]");
    if (!row) return;
    renderEmployee(findEmployee(row.dataset.id));
    byId("verify").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  byId("printSelected").addEventListener("click", () => window.print());

  byId("copyLink").addEventListener("click", async () => {
    const employee = findEmployee(selectedId);
    if (!employee) return;
    await navigator.clipboard.writeText(currentUrlFor(employee.id));
    byId("copyLink").textContent = "Ссылка скопирована";
    setTimeout(() => {
      byId("copyLink").textContent = "Скопировать QR-ссылку";
    }, 1400);
  });
}

function init() {
  renderQuickList();
  renderRegistry();
  renderJournal();
  bindEvents();
  const params = new URLSearchParams(window.location.search);
  const employee = findEmployee(params.get("id"));
  renderEmployee(employee || employees[0]);
}

document.addEventListener("DOMContentLoaded", init);
