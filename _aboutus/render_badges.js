import badges from './badges.json' with {type: 'json'};

const renderBadges = () => {

    let disp = '';
    badges.forEach(badge => {
        disp += `<div>
            <img src="${badge.img}" width="64" height="64" alt="${badge.label}">
            <div>${badge.label}</div>
        </div>`;
    });

    document.getElementById('badges').innerHTML = disp;
};

renderBadges();