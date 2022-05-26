import { rest } from 'msw';

const products = localStorage.getItem('products')
  ? JSON.parse(localStorage.getItem('products'))
  : 
    [
        {
            "id": 1,
            "title": "iPhone 11 64GB I Chính hãng VN/A",
            "coins": 13590000,
            "saleCoin": 18390000,
            "description": "Thu cũ đổi mới trọn đời",
            "image":"/image/sale/iphone-11.png",
            "listImg":[
                "image/Lap/macslice-Pe.png",
                "imgage/lap/slice-mac-iteam2.webp",
                "image/Lap/slice-mac-iteam.webp",
                "image/Lap/slice-mac.webp",
                "image/Lap/slice-mac.webp",
                "imgage/Lap/slice-mac1.webp",
                "image/lap/slice-mac3.jpg"
            ],
            "sale":"20%",
            "status": true
        },
        {
            "id": 2,
            "title": "Xiaomi Redmi Note 10S - 8GB/128GB - Chính hãng DGW",
            "coins": 5600000,
            "sale-coin": 6490000,
            "description": "Tặng phiếu tai nghe Xiaomi Mi Earphone Basic ",
            "image":"/image/menuPhone/xiomi11life.png",
            "listImg":[
                "image/Lap/macslice-Pe.png",
                "imgage/lap/slice-mac-iteam2.webp",
                "image/Lap/slice-mac-iteam.webp",
                "image/Lap/slice-mac.webp",
                "image/Lap/slice-mac.webp",
                "imgage/Lap/slice-mac1.webp",
                "image/lap/slice-mac3.jpg"
            ],
            "sale":"30%",
            "status": true
        },
        {
            "id": 3,
            "title": "Laptop Dell Inspiron N3511A - P112F001ABL - Chính hãng",
            "coins": 13900000,
            "sale-coin": 15900000,
            "description": "Tặng phiếu mua hàng trị giá :300.000đ",
            "image":"/image/Lap/laptop-dell-vostro-5515.png",
            "listImg":[
                "image/Lap/macslice-Pe.png",
                "imgage/lap/slice-mac-iteam2.webp",
                "image/Lap/slice-mac-iteam.webp",
                "image/Lap/slice-mac.webp",
                "image/Lap/slice-mac.webp",
                "imgage/Lap/slice-mac1.webp",
                "image/lap/slice-mac3.jpg"
            ],
            "sale":"30%",
            "status": true
        },
        {
            "id": 4,
            "title": "Apple AirPods Pro - Chính Hãng Apple (MLWK3ZP/A, MagSafe)",
            "coins": 4350000,
            "sale-coin": 71900000,
            "description": "Tặng phiếu mua hàng trị giá :300.000đ",
            "image":"/image/Acccers/airpods-2.jpg",
            "listImg":[
                "image/Lap/macslice-Pe.png",
                "imgage/lap/slice-mac-iteam2.webp",
                "image/Lap/slice-mac-iteam.webp",
                "image/Lap/slice-mac.webp",
                "image/Lap/slice-mac.webp",
                "imgage/Lap/slice-mac1.webp",
                "image/lap/slice-mac3.jpg"
            ],
            "sale":"30%",
            "status": true
        },
        {
            "id": 5,
            "title": "Máy tính bảng Samsung Galaxy Tab A7 Lite - Chính hãng",
            "coins": 3890000,
            "sale-coin": 4990000,
            "description": "Tặng phiếu mua hàng trị giá :300.000đ",
            "image":"/image/Tab/tab-new.png",
            "listImg":[
                "image/Lap/macslice-Pe.png",
                "imgage/lap/slice-mac-iteam2.webp",
                "image/Lap/slice-mac-iteam.webp",
                "image/Lap/slice-mac.webp",
                "image/Lap/slice-mac.webp",
                "imgage/Lap/slice-mac1.webp",
                "image/lap/slice-mac3.jpg"
            ],
            
            "status": true
        }
    ]

const users = localStorage.getItem('users')
  ? JSON.parse(localStorage.getItem('users'))
  : [
      {
        id: 1,
        username: 'banx',
        password: '123456',
        email: 'ba@techmaster.vn',
        phone: '0965338283',
        avatar: '',
        roles: [1, 2],
      },
    ];

export const handlers = [
  rest.get('products', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(products));
  }),

  rest.get('products/:id', (req, res, ctx) => {
    const { id } = req.params;

    const product = products.find((product) => product.id == id);

    if (product) {
      return res(ctx.status(200), ctx.json(product));
    } else {
      return res(
        ctx.status(400),
        ctx.json({ error: 'Không tìm thấy sản phẩm' })
      );
    }
  }),

  rest.post('login', (req, res, ctx) => {
    const { username, password } = JSON.parse(req.body);
    const user = users.find((user) => user.username == username);

    if (!user) {
      return res(
        ctx.status(400),
        ctx.json({ error: 'Tài khoản hoặc mật khẩu không đúng' })
      );
    } else {
      const validPassword = user.password == password;

      if (!validPassword) {
        return res(
          ctx.status(400),
          ctx.json({ error: 'Tài khoản hoặc mật khẩu không đúng' })
        );
      } else {
        return res(
          ctx.status(200),
          ctx.json(user),
          ctx.cookie('uid', user.id, { httpOnly: true, maxAge: 2592000 })
        );
      }
    }
  }),

  rest.post('signup', (req, res, ctx) => {
    // push vào mảng users
    localStorage.setItem('users', JSON.stringify(users))
  })
];
