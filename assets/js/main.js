// Data configuration - có thể chỉnh sửa dữ liệu ở đây
const bioData = {
  name: 'BSCK II: Nguyễn Trọng Hùng',
  affiliation: 'Bác sĩ bệnh viện Phụ Sản Trung Ương',
  role: 'Phụ trách chuyên môn chính tại phòng khám Sản Phụ Khoa Màu Hồng.',
  avatar: 'assets/images/avatar.png',
  slides: ['assets/images/Slide-1.png', 'assets/images/Slide-2.png'],
  slideInterval: 3000, // Thời gian chuyển slide (ms)
  links: [
    {
      title: 'Liên hệ 0938.689.115',
      url: 'tel:0938689115',
      icon: 'phone',
      type: 'contact',
    },
    {
      title: 'ĐỊA CHỈ PHÒNG KHÁM',
      url: 'https://maps.app.goo.gl/onxKQLryMBCgWtMA9',
      icon: 'map',
      type: 'location',
    },
    {
      title: 'XEM LỊCH KHÁM TUẦN NÀY !',
      url: 'https://www.facebook.com/sanphukhoamauhong.bshung/',
      icon: 'facebook',
      type: 'fanpage',
    },
    {
      title: 'Liên hệ qua ZALO',
      url: 'https://zalo.me/0938689115',
      icon: 'zalo',
      type: 'zalo',
    },
    {
      title: 'Cập nhật kiến thức sản khoa',
      url: 'https://www.tiktok.com/@bshung.pstw',
      icon: 'tiktok',
      type: 'tiktok',
    },
    {
      title: 'Thông tin chi tiết về phòng khám',
      url: 'https://sanphukhoamauhong.com/',
      icon: 'website',
      type: 'website',
    },
  ],
};

// Initialize page
function init() {
  loadHeader();
  loadLinks();
  loadSeparator();
  loadSlides();
}

// Load header information
function loadHeader() {
  const nameEl = document.getElementById('name');
  const affiliationEl = document.getElementById('affiliation');
  const roleEl = document.getElementById('role');
  const avatarEl = document.getElementById('avatar');

  if (nameEl) nameEl.textContent = bioData.name || '';
  if (affiliationEl) affiliationEl.textContent = bioData.affiliation || '';
  if (roleEl) roleEl.textContent = bioData.role || '';
  if (avatarEl && bioData.avatar) avatarEl.src = bioData.avatar;
}

// Load separator line
function loadSeparator() {
  const separatorEl = document.getElementById('separatorLine');
  if (separatorEl) {
    separatorEl.innerHTML = `
      <svg width="152" height="2" viewBox="0 0 152 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="1" x2="152" y2="1" stroke="#ef6790" stroke-width="1.5"/>
      </svg>
    `;
  }
}

// Load and render links
function loadLinks() {
  const linksContainer = document.getElementById('linksContainer');

  if (!linksContainer) {
    console.error('Links container not found!');
    return;
  }

  linksContainer.innerHTML = '';

  if (!bioData.links || bioData.links.length === 0) {
    linksContainer.innerHTML = '<p class="text-center text-gray-500">Chưa có links nào</p>';
    return;
  }

  bioData.links.forEach((link, index) => {
    const linkElement = createLinkElement(link);
    // Thêm class animation với delay tăng dần cho từng button
    // Bắt đầu từ 1s để đợi avatar và card hiển thị xong
    linkElement.classList.add('action-button');

    // Thêm class highlight cho 2 nút đầu tiên (điện thoại và địa chỉ)
    // Mỗi nút có animation khác nhau và không đồng bộ
    // Bounce chỉ bắt đầu sau khi slideInUp hoàn thành (1s)
    if (index === 0) {
      linkElement.classList.add('highlight-1');
      const delay = 1.0;
      const slideInUpDuration = 1.0; // Thời gian slideInUp
      linkElement.style.setProperty('--button-delay', `${delay}s`);
      // Bounce bắt đầu sau khi slideInUp hoàn thành
      linkElement.style.animationDelay = `${delay}s, ${delay + slideInUpDuration}s`;
    } else if (index === 1) {
      linkElement.classList.add('highlight-2');
      const delay = 1.1;
      const slideInUpDuration = 1.0; // Thời gian slideInUp
      const bounceDelay = delay + slideInUpDuration + 0.8; // Thêm 0.8s để không đồng bộ với nút 1
      linkElement.style.setProperty('--button-delay', `${delay}s`);
      linkElement.style.animationDelay = `${delay}s, ${bounceDelay}s`;
    } else {
      linkElement.style.animationDelay = `${1.0 + index * 0.1}s`;
    }

    linksContainer.appendChild(linkElement);
  });
}

// Create link element with Tailwind classes
function createLinkElement(link) {
  const linkItem = document.createElement('a');
  linkItem.href = link.url;

  // Set target based on link type
  if (link.type === 'contact' || link.url.startsWith('tel:') || link.url.startsWith('mailto:')) {
    // No target for phone/email links
  } else {
    linkItem.target = '_blank';
    linkItem.rel = 'noopener noreferrer';
  }

  // Pink button style - matching Figma design
  linkItem.className =
    'block text-white font-extrabold rounded-full px-5 py-3 text-center border border-white relative';
  linkItem.style.backgroundColor = '#ef6790';
  linkItem.style.boxShadow = '2px 2px 1px 0px black';
  linkItem.style.height = '47px';
  linkItem.style.display = 'flex';
  linkItem.style.alignItems = 'center';
  linkItem.style.justifyContent = 'center';

  // Add icon based on type - sử dụng PNG icon từ thư mục images
  const iconSize = '22px';
  let iconHTML = '';

  // Map icon types to PNG file names
  const iconMap = {
    phone: 'icon-phone.png',
    map: 'icon-map.png',
    facebook: 'icon-facebook.png',
    zalo: 'icon-zalo.png',
    tiktok: 'icon-tiktok.png',
    website: 'icon-website.png',
  };

  if (link.icon && iconMap[link.icon]) {
    iconHTML = `
      <img 
        src="assets/images/${iconMap[link.icon]}" 
        alt="${link.icon}" 
        style="width: ${iconSize}; height: ${iconSize}; object-fit: contain;"
        onerror="this.style.display='none';"
      />
    `;
  }

  // Set font size based on type
  const fontSize = link.type === 'contact' ? '20px' : '16px';

  if (iconHTML) {
    linkItem.innerHTML = `<span style="margin-right: 8px; display: inline-flex; align-items: center;">${iconHTML}</span><span style="font-size: ${fontSize};">${link.title}</span>`;
  } else {
    linkItem.innerHTML = `<span style="font-size: ${fontSize};">${link.title}</span>`;
  }

  return linkItem;
}

// Load and render slides
function loadSlides() {
  const slideWrapper = document.getElementById('slideWrapper');
  const slideContainer = document.getElementById('slideContainer');

  if (!slideWrapper || !slideContainer) {
    console.error('Slide container not found!');
    return;
  }

  if (!bioData.slides || bioData.slides.length === 0) {
    slideContainer.style.display = 'none';
    return;
  }

  // Clear existing slides
  slideWrapper.innerHTML = '';

  // Duplicate slides để tạo hiệu ứng vô tận
  // Tạo 2 bộ slides: bộ 1 và bộ 2 (giống nhau) để scroll liên tục
  const slidesToRender = [...bioData.slides, ...bioData.slides];

  // Create slide items
  slidesToRender.forEach((slide, index) => {
    const slideItem = document.createElement('div');
    slideItem.className = 'slide-item';
    slideItem.innerHTML = `<img src="${slide}" alt="Slide ${
      (index % bioData.slides.length) + 1
    }" onerror="this.style.display='none';" />`;
    slideWrapper.appendChild(slideItem);
  });
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
