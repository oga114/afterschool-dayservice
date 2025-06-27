import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Clock, Star, Phone, Mail, MapPin, Calendar, Smile, BookOpen, Palette } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-400  rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">株式会社Sample</h1>
                <p className="text-xs text-gray-600">放課後等デイサービス</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="#about" className="text-gray-700 hover:text-green-500 transition-colors">
                サービス紹介
              </Link>
              <Link href="#features" className="text-gray-700 hover:text-green-500 transition-colors">
                特徴
              </Link>
              <Link href="#schedule" className="text-gray-700 hover:text-green-500 transition-colors">
                一日の流れ
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-green-500 transition-colors">
                お問い合わせ
              </Link>
            </nav>
            <Button className="bg-gradient-to-r from-green-400  hover:from-green-500 hover:to-yellow-500 text-white">
              見学予約
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-green-100 text-green-700 hover:bg-green-200">安心・安全な環境</Badge>
              <h2 className="text-4xl md:text-4xl font-bold text-gray-800 leading-tight">
                子どもたちの
                <span className="text-transparent bg-clip-text bg-green-400 to-yellow-500">
                  笑顔
                </span>
                と
                <span className="text-transparent bg-clip-text bg-green-400 to-yellow-500">
                  成長
                </span>
                を支えます
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                放課後等デイサービス「株式会社Sample」では、一人ひとりの個性を大切にしながら、
                楽しい活動を通じて子どもたちの自立と社会参加を支援しています。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-green-400  hover:from-green-500 hover:to-yellow-500 text-white"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  お電話でのお問い合わせ
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-300 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  施設見学を予約
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-yellow-200 rounded-3xl transform rotate-3"></div>
              <Image
                src="/exsample-1.png"
                alt="子どもたちが楽しく遊んでいる様子"
                width={600}
                height={500}
                className="relative rounded-3xl shadow-2xl object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Smile className="w-8 h-8 text-yellow-500" />
                  <div>
                    <p className="font-semibold text-gray-800">毎日笑顔で</p>
                    <p className="text-sm text-gray-600">楽しく活動中！</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">サービス紹介</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              放課後等デイサービスとして、障害のあるお子様が放課後や休日に安心して過ごせる場所を提供しています。
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-400  rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-green-700">個別支援</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  一人ひとりの特性や発達段階に合わせた個別支援計画を作成し、きめ細やかなサポートを行います。
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-400  rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-green-700">学習支援</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  宿題のサポートや基礎学習の定着を図り、学校生活をより充実したものにするお手伝いをします。
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-400  rounded-full flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-green-700">創作活動</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  工作、絵画、音楽など様々な創作活動を通じて、創造性や表現力を育み、達成感を味わえます。
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activity Images Section */}
      <section className="py-8 bg-gradient-to-r from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">活動の様子</h3>
          </div>
          <div className="max-w-4xl mx-auto">
            <Image
              src="exsample-2.png"
              alt="子どもたちの活動風景"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gradient-to-r from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">みらいキッズの特徴</h3>
            <p className="text-lg text-gray-600">私たちが大切にしていること</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-400  rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">愛情いっぱい</h4>
              <p className="text-sm text-gray-600">
                スタッフ全員が子どもたち一人ひとりを大切に思い、温かい環境を提供します。
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-400  rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">専門性</h4>
              <p className="text-sm text-gray-600">
                児童発達支援管理責任者をはじめ、専門知識を持ったスタッフが対応します。
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg--green-400  rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">柔軟な対応</h4>
              <p className="text-sm text-gray-600">平日は学校終了後から、土日祝日は朝から夕方まで利用可能です。</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-400  rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">少人数制</h4>
              <p className="text-sm text-gray-600">
                一人ひとりに目が行き届くよう、少人数でのグループ活動を心がけています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">一日の流れ</h3>
            <p className="text-lg text-gray-600">子どもたちの一日をご紹介します</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-green-600 mb-4">平日のスケジュール</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                    <div className="bg-green-400 text-white px-3 py-1 rounded-full text-sm font-semibold">14:00</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">お迎え・来所</h5>
                      <p className="text-sm text-gray-600">学校までお迎えに行きます</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
                    <div className="bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold">15:00</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">おやつ・休憩</h5>
                      <p className="text-sm text-gray-600">みんなでおやつタイム</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                    <div className="bg-green-400 text-white px-3 py-1 rounded-full text-sm font-semibold">15:30</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">宿題・学習支援</h5>
                      <p className="text-sm text-gray-600">宿題のサポートを行います</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
                    <div className="bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold">16:30</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">活動・遊び</h5>
                      <p className="text-sm text-gray-600">創作活動や運動遊び</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                    <div className="bg-green-400 text-white px-3 py-1 rounded-full text-sm font-semibold">17:30</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">お送り</h5>
                      <p className="text-sm text-gray-600">ご自宅までお送りします</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-green-600 mb-4">休日のスケジュール</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                    <div className="bg-green-400 text-white px-3 py-1 rounded-full text-sm font-semibold">10:00</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">来所・朝の会</h5>
                      <p className="text-sm text-gray-600">元気にあいさつから始まります</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
                    <div className="bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold">10:30</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">午前の活動</h5>
                      <p className="text-sm text-gray-600">外出活動や集団活動</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                    <div className="bg-green-400 text-white px-3 py-1 rounded-full text-sm font-semibold">12:00</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">昼食</h5>
                      <p className="text-sm text-gray-600">みんなで楽しくお昼ご飯</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
                    <div className="bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold">13:30</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">午後の活動</h5>
                      <p className="text-sm text-gray-600">創作活動や自由遊び</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                    <div className="bg-green-400 text-white px-3 py-1 rounded-full text-sm font-semibold">16:00</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">お送り</h5>
                      <p className="text-sm text-gray-600">一日お疲れ様でした</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">お問い合わせ</h3>
            <p className="text-lg text-gray-600">お気軽にご相談ください</p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">施設情報</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">住所</p>
                    <p className="text-gray-600">
                      〒123-4567
                      <br />
                      東京都○○区○○町1-2-3
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">電話番号</p>
                    <p className="text-gray-600">03-1234-5678</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">メール</p>
                    <p className="text-gray-600">info@mirai-kids.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">営業時間</p>
                    <p className="text-gray-600">
                      平日：14:00〜18:00
                      <br />
                      土日祝：10:00〜16:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">見学・相談予約</CardTitle>
                <CardDescription>施設見学や利用相談を随時受け付けています</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-gradient-to-r from-green-400  hover:from-green-500 hover:to-yellow-500 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  電話で予約する
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-green-300 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  メールで問い合わせ
                </Button>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>見学可能時間：</strong>
                    <br />
                    平日 15:00〜17:00
                    <br />
                    土曜 10:00〜15:00
                    <br />
                    ※事前予約をお願いします
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400  rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold">株式会社Sample</h4>
                <p className="text-xs text-gray-400">放課後等デイサービス</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400">© 2025 株式会社Sample. All rights reserved.</p>
              <p className="text-xs text-gray-500 mt-1">子どもたちの笑顔と成長を支えます</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
