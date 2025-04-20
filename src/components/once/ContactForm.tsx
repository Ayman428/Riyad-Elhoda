import { MdPhone, MdLocationOn, MdEmail } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import WrapperContainer from '../reuse/WrapperContainer';

const ContactForm = () => {
    return (
        <WrapperContainer>
            <div className="text-lg text-gray-600">
                <p>
                    <span className="text-[#10357F] font-bold">مدارس رياض الهدى</span> / مدارس رياض الهدى 2 /
                    برنامج رياض الهدى /
                    <span className="text-black font-medium"> كليه الفيحاء الاهليه </span>
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 items-start">
                <div className="lg:col-span-2 rounded-lg shadow p-6 text-black">
                    <h2 className="text-lg font-bold text-[#10357F] mb-4 text-right">
                        سجل معنا الآن
                    </h2>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right">
                        {/* اسم ولي الأمر */}
                        <div className="form-control">
                            <label className="block mb-1 font-medium">اسم ولي الأمر</label>
                            <input
                                type="text"
                                placeholder="قم بكتابة اسم ولي الأمر"
                                className="input input-bordered border-black bg-white w-full"
                            />
                        </div>

                        {/* اسم الطالب */}
                        <div className="form-control">
                            <label className="block mb-1 font-medium">اسم الطالب</label>
                            <input
                                type="text"
                                placeholder="قم بكتابة اسم الطالب الكامل"
                                className="input input-bordered border-black bg-white w-full"
                            />
                        </div>

                        {/* الصف الدراسي */}
                        <div className="form-control">
                            <label className="block mb-1 font-medium">الصف الدراسي</label>
                            <select className="select select-bordered border-black bg-white w-full">
                                <option disabled selected>
                                    قم بتحديد الصف الدراسي لطفلك
                                </option>
                                <option>الصف الأول</option>
                                <option>الصف الثاني</option>
                                <option>الصف الثالث</option>
                            </select>
                        </div>

                        {/* البريد الإلكتروني */}
                        <div className="form-control">
                            <label className="block mb-1 font-medium">البريد الإلكتروني</label>
                            <input
                                type="email"
                                placeholder="قم بكتابة بريدك الإلكتروني"
                                className="input input-bordered border-black bg-white w-full"
                            />
                        </div>

                        {/* رقم الجوال */}
                        <div className="form-control md:col-span-2">
                            <label className="block mb-1 font-medium">رقم الجوال</label>
                            <input
                                type="text"
                                placeholder="قم بكتابة رقم الجوال الخاص بك"
                                className="input input-bordered border-black bg-white w-full"
                            />
                        </div>

                        {/* الموضوع */}
                        <div className="form-control md:col-span-2">
                            <label className="block mb-1 font-medium">الموضوع</label>
                            <input
                                type="text"
                                placeholder="أدخل الموضوع المرتبط هنا"
                                className="input input-bordered border-black bg-white w-full"
                            />
                        </div>

                        {/* الرسالة */}
                        <div className="form-control md:col-span-2">
                            <label className="block mb-1 font-medium">الرسالة</label>
                            <textarea
                                className="textarea textarea-bordered border-black bg-white w-full"
                                rows={4}
                                placeholder="قم بكتابة رسالتك هنا..."
                            />
                        </div>

                        {/* إرسال */}
                        <div className="form-control md:col-span-2">
                            <button
                                type="submit"
                                className="btn w-full bg-[#10357F] text-white hover:bg-[#0c2a66]"
                            >
                                إرسال
                            </button>
                        </div>
                    </form>
                </div>

                <div className="space-y-4">
                    <div className="flex flex-col gap-4">
                        {/* رقم الهاتف */}
                        <div className="group flex items-center rounded-lg shadow p-4 text-black hover:bg-[#10357F] transition">
                            <div className="rounded-full p-3">
                                <MdPhone className="text-2xl text-[#10357F] group-hover:text-white transition" />
                            </div>
                            <div className="mr-4">
                                <p className="text-sm text-gray-500 group-hover:text-white transition">رقم الهاتف</p>
                                <p className="font-semibold group-hover:text-white transition">+966 55 123 4567</p>
                            </div>
                        </div>

                        {/* البريد الإلكتروني */}
                        <div className="group flex items-center rounded-lg shadow p-4 text-black hover:bg-[#10357F] transition">
                            <div className="rounded-full p-3 bg-white">
                                <MdEmail className="text-2xl text-[#10357F] group-hover:text-[#10357F]" />
                            </div>
                            <div className="mr-4">
                                <p className="text-sm text-gray-500 group-hover:text-white transition">البريد الإلكتروني</p>
                                <p className="font-semibold break-words group-hover:text-white transition">
                                    info@riyadhalhuda.edu.sa
                                </p>
                            </div>
                        </div>

                        {/* ساعات العمل */}
                        <div className="group flex items-center rounded-lg shadow p-4 text-black hover:bg-[#10357F] transition">
                            <div className="rounded-full p-3">
                                <MdLocationOn className="text-2xl text-[#10357F] group-hover:text-white transition" />
                            </div>
                            <div className="mr-4">
                                <p className="text-sm text-gray-500 group-hover:text-white transition">ساعات العمل</p>
                                <p className="font-semibold group-hover:text-white transition">
                                    من الأحد إلى الخميس<br />9:00 AM - 6:00 PM
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center gap-3 pt-2">
                        <a href="#" className="btn btn-circle bg-white btn-sm text-[#10357F] border-[#10357F] hover:bg-[#10357F] hover:text-white">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="btn btn-circle bg-white btn-sm text-[#10357F] border-[#10357F] hover:bg-[#10357F] hover:text-white">
                            <FaInstagram />
                        </a>
                        <a href="#" className="btn btn-circle bg-white btn-sm text-[#10357F] border-[#10357F] hover:bg-[#10357F] hover:text-white">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>
        </WrapperContainer>
    );
};

export default ContactForm;
