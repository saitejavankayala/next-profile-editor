# 🧑‍💻 Mini Profile Editor – Next.js + App Router

A simple profile viewer and editor app built using **Next.js App Router**, **React Hook Form**, **Zod**, **React Query**, **Zustand**, and **TailwindCSS**. Deploys seamlessly to **Vercel**.

---

## 🚀 Features

- 🔒 Simulated login/logout using Zustand + localStorage  
- 👤 View profile (public route)  
- ✏️ Edit profile (private route)  
- ✅ Form validation with Zod + React Hook Form  
- 📦 Data fetching and mutation using React Query  
- 🌐 Server and Client components with App Router  
- 🎨 UI with TailwindCSS + ShadCN (Radix) components  
- 🔔 Toast notifications with Sonner  
- 💅 Responsive and accessible UI  

---

## 📁 Project Structure

```txt
app/
├── (public)/profile/page.tsx         # Server Component – public profile view
├── (private)/edit-profile/page.tsx  # Client Component – edit form
├── login/page.tsx                   # Login page
├── api/profile/route.ts             # GET & PUT API routes

lib/
├── zustand.ts                       # Auth state using Zustand
├── validation.ts                    # Zod schema

components/
├── ProfileCard.tsx                  # Displays profile
├── ProfileForm.tsx                  # Editable form
├── LoginToggle.tsx                  # Login/Logout button
├── ToastListener.tsx                # Zustand + Sonner bridge
