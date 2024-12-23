# 🚀 ZLottie

ZLottie is an innovative solution for compressing and decompressing Lottie animations, enabling significant file size reduction while maintaining compatibility. This project is designed to address modern performance demands and minimize data transfer costs.

## 💫 Web Page
Deployed here: [link](https://dmaximyuk.github.io/zlottie/)

## 🤔 Why ZLottie?

### 🅵 The "Z" in the Name  
The "Z" in ZLottie refers to the **zlib** compression format. Zlib is more efficient than gzip in terms of compression ratio, providing a smaller output size. However, it’s important to note that ZLottie does not replace the need to compress your project with gzip for delivery; instead, it adds another layer of optimization to reduce Lottie file sizes further.

### 🛠️ Raw Zlib Compression  
ZLottie uses raw zlib compression to achieve optimal size reduction for your Lottie files.

### 😣 Why not Gzip?
Initially, everything was written in Gzip, but when I discovered that Zlib saves a couple of kb, I rewrote everything to Zlib. For example, compressed animation in Gzip can weigh about 65 kb, while in Zlib it is about 58 kb. I think it is also essential. And that's why the RAW format is "saving on matches", where the bill goes to bytes.

### 🔄 Pako for Compression, fflate for Decompression  
ZLottie leverages **Pako** for compressing animations and **fflate** for decompression on the client side. While there are minor losses in decompression performance when using fflate, the overall tradeoff is still favorable compared to downloading a standard 500 KB Lottie file.

### 💡 Not Just Saving Bytes — Saving Megabytes  
This is not about saving a few kilobytes; it’s about saving **megabytes** of bandwidth, which can result in substantial cost reductions for projects serving large audiences.

## ✅ Proven Performance  
ZLottie has been tested in two real-world projects, demonstrating its effectiveness in reducing file sizes and enhancing performance.

## 🚧 Future Plans  
We plan to migrate compression to **WebAssembly (WASM)** in the future, which promises even better performance and flexibility. However, due to certain browser limitations and the current state of my WebAssembly expertise, this feature is not yet implemented.

## 🙎️ Contacts
If you have any questions, feel free to reach out:

- **Email**: d_maksimyk@vk.com
- **Telegram**: https://t.me/d_maximyuk
- **GitHub**: https://github.com/dmaximyuk

## 📄 License  
We are for openness and accessibility. You can rewrite and modify as you like. Feel free to do it. I will also be glad if you share it with others!

> Give ZLottie a try today and experience the benefits of smarter compression for your Lottie animations!
