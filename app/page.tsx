import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className="text-center space-y-3 p-8 rounded-3xl bg-white/70 backdrop-blur-md shadow-xl max-w-md mx-4">
        <div className="flex justify-center items-center p-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={700}
            height={700}
            className="object-contain w-40"
          />
        </div>

        <h1 className="text-4xl font-bold">Zvieratkuj</h1>

        <p className="text-base text-gray-600">
          Všetko pre tvoje zvieratko na tomto webe.
        </p>

        <div className="bg-indigo-200 rounded-xl p-4">
          <p className="text-gray-800 font-medium font-mono">
            Stránka je momentálne vo vývoji
          </p>
        </div>
      </div>
    </main>
  );
}
