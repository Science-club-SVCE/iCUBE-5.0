const timelineItems = document.querySelectorAll('#schedule .timeline-item');
const timeline = document.querySelector('#schedule .timeline');
const scheduleSection = document.querySelector('#schedule');

/* ===== SCROLL-BASED ITEM APPEAR + DISAPPEAR ===== */
const itemObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            } else {
                entry.target.classList.remove('reveal'); // 🔥 scroll up -> disappear
            }
        });
    },
    {
        threshold: 0.3
    }
);

timelineItems.forEach(item => itemObserver.observe(item));

/* ===== SCROLL-BASED TIMELINE LINE FILL ===== */


function updateTimelineFill() {
    const rect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // 🔧 TUNING VALUES (change these if needed)
    const startOffset = windowHeight * 0.8;  // start early
    const endOffset   = rect.height * 0.2;   // finish a bit early

    const progress = Math.min(
        Math.max((startOffset - rect.top) / (startOffset + rect.height - endOffset), 0),
        1
    );

    // line fill
    timeline.style.setProperty('--line-scale', progress);

    // item reveal synced with line
    timelineItems.forEach(item => {
        const step = parseFloat(item.dataset.step);
        if (progress >= step) {
            item.classList.add('reveal');
        } 
    });
}
window.addEventListener('scroll', updateTimelineFill);
window.addEventListener('load', updateTimelineFill);
window.addEventListener('resize', updateTimelineFill);
/* ===== TIMELINE ITEM INTERACTIONS ===== */
timelineItems.forEach(item => {

    const title = item.querySelector('.timeline-title');
    if (!title) return;

    /* ===== Desktop hover behavior ===== */
    item.addEventListener('mouseenter', () => {
        timelineItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('active');
    });

    /* ===== Mobile / click support ===== */
    title.addEventListener('click', (e) => {
        // Prevent hover conflict
        e.stopPropagation();

        const isActive = item.classList.contains('active');
        timelineItems.forEach(i => i.classList.remove('active'));

        if (!isActive) {
            item.classList.add('active');
        }
    });
});

/* Close any open item when clicking outside (mobile UX) */
document.addEventListener('click', () => {
    timelineItems.forEach(i => i.classList.remove('active'));
});




function parseDate(text) {
    // Handles "2–3 Feb 2026" and "17 Jan 2026"
    const cleanText = text.split('–')[0].trim();
    return new Date(cleanText);
}

function highlightCurrentPhase() {
    const today = new Date();
    const items = document.querySelectorAll('#schedule .timeline-item');

    let closestItem = null;
    let smallestDiff = Infinity;

    items.forEach(item => {
        const dateEl = item.querySelector('.timeline-date');
        if (!dateEl) return;

        const eventDate = parseDate(dateEl.textContent);
        const diff = Math.abs(eventDate - today);

        if (diff < smallestDiff) {
            smallestDiff = diff;
            closestItem = item;
        }
    });

    if (closestItem) {
        closestItem.classList.add('active', 'current-phase');
    }
}

window.addEventListener('load', highlightCurrentPhase);
