import React, { useState } from 'react';
import { FileText, Calendar, Award, HelpCircle, CheckCircle, AlertCircle } from 'lucide-react';

const AdmissionPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    dob: '',
    address: '',
    parentName: '',
    parentPhone: '',
    program: '',
    education: '',
    seeGrade: '',
    remarks: '',
    agreeTerms: false,
  });

  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    
    // Clear error for this field when user types
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Phone number must be 10 digits';
    }
    
    if (!formData.gender) errors.gender = 'Gender is required';
    if (!formData.dob) errors.dob = 'Date of birth is required';
    if (!formData.address.trim()) errors.address = 'Address is required';
    if (!formData.parentName.trim()) errors.parentName = 'Parent/Guardian name is required';
    if (!formData.program) errors.program = 'Please select a program';
    if (!formData.education) errors.education = 'Please select your education level';
    if (!formData.agreeTerms) errors.agreeTerms = 'You must agree to the terms and conditions';

    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        gender: '',
        dob: '',
        address: '',
        parentName: '',
        parentPhone: '',
        program: '',
        education: '',
        seeGrade: '',
        remarks: '',
        agreeTerms: false,
      });
    }, 1500);
  };

  const scholarshipDates = [
    {
      date: '4th Baisakh',
      time: '11:00 AM',
      venue: 'Lord Buddha College, Main Hall',
      registration: 'Open until 3rd Baisakh',
    },
    {
      date: '18th Baisakh',
      time: '11:00 AM',
      venue: 'Lord Buddha College, Main Hall',
      registration: 'Open until 17th Baisakh',
    },
  ];

  const requiredDocuments = [
    'SEE/SLC Mark sheet and Character Certificate',
    'Citizenship Certificate or Birth Certificate',
    'Passport-sized photographs (4 copies)',
    'Transfer Certificate (if applicable)',
    'Migration Certificate (if applicable)',
  ];
  
  const faqItems = [
    {
      question: 'What is the admission process?',
      answer: 'The admission process involves filling out the application form, submitting required documents, appearing for a scholarship test (optional), and completing the enrollment upon selection.'
    },
    {
      question: 'Is there any scholarship available?',
      answer: 'Yes, we offer scholarships based on merit and financial need. Students can apply for scholarships by participating in our scholarship tests held regularly before the academic session begins.'
    },
    {
      question: 'Can I apply for multiple programs?',
      answer: 'Yes, students can apply for multiple programs. However, they need to prioritize their preferences as the schedules might overlap.'
    },
    {
      question: 'What is the fee structure?',
      answer: 'Fee structures vary by program. Please refer to the specific course pages for detailed fee information or contact our admission office.'
    },
    {
      question: 'Are there any hostel facilities available?',
      answer: 'Yes, we provide hostel facilities for both boys and girls with modern amenities. Limited seats are available, so early application is recommended.'
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary py-20 relative">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="container relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admission</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join Lord Buddha College & Success Institute for quality education and a promising future.
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Admission Process</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Follow these simple steps to apply for admission to your desired program.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process Steps */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2"></div>
              
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-primary">Fill Application Form</h3>
                    <p className="text-gray-600">
                      Complete the online application form or visit our admission office to fill out a physical form.
                    </p>
                  </div>
                  <div className="hidden md:flex items-center justify-center z-10 h-12 w-12 rounded-full bg-primary text-white font-bold">1</div>
                  <div className="flex md:hidden items-center justify-center z-10 h-10 w-10 rounded-full bg-primary text-white font-bold mb-3">1</div>
                  <div className="flex-1 md:pl-8"></div>
                </div>
                
                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0 md:order-1 order-2">
                  </div>
                  <div className="hidden md:flex items-center justify-center z-10 h-12 w-12 rounded-full bg-primary text-white font-bold order-2">2</div>
                  <div className="flex md:hidden items-center justify-center z-10 h-10 w-10 rounded-full bg-primary text-white font-bold mb-3 order-1">2</div>
                  <div className="flex-1 md:pl-8 order-3">
                    <h3 className="text-xl font-bold text-primary">Submit Documents</h3>
                    <p className="text-gray-600">
                      Submit all required documents either online or in person at our admission office.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-primary">Scholarship Test (Optional)</h3>
                    <p className="text-gray-600">
                      Appear for scholarship test if you wish to be considered for merit-based scholarships.
                    </p>
                  </div>
                  <div className="hidden md:flex items-center justify-center z-10 h-12 w-12 rounded-full bg-primary text-white font-bold">3</div>
                  <div className="flex md:hidden items-center justify-center z-10 h-10 w-10 rounded-full bg-primary text-white font-bold mb-3">3</div>
                  <div className="flex-1 md:pl-8"></div>
                </div>
                
                {/* Step 4 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0 md:order-1 order-2">
                  </div>
                  <div className="hidden md:flex items-center justify-center z-10 h-12 w-12 rounded-full bg-primary text-white font-bold order-2">4</div>
                  <div className="flex md:hidden items-center justify-center z-10 h-10 w-10 rounded-full bg-primary text-white font-bold mb-3 order-1">4</div>
                  <div className="flex-1 md:pl-8 order-3">
                    <h3 className="text-xl font-bold text-primary">Enrollment</h3>
                    <p className="text-gray-600">
                      Complete the enrollment process by paying the applicable fees and finalizing admission formalities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Scholarship Test Info */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Scholarship Test</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Participate in our scholarship test to qualify for merit-based financial assistance.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 bg-primary text-white">
                <h3 className="text-2xl font-bold mb-2">Upcoming Scholarship Tests</h3>
                <p>Register and appear for the test to be eligible for scholarships up to 100%.</p>
              </div>
              
              <div className="p-6">
                <div className="space-y-6">
                  {scholarshipDates.map((test, index) => (
                    <div key={index} className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border rounded-lg">
                      <div>
                        <div className="flex items-center mb-2">
                          <Calendar className="h-5 w-5 text-primary mr-2" />
                          <h4 className="font-semibold">{test.date} at {test.time}</h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Venue: {test.venue}</p>
                        <p className="text-sm text-gray-600">Registration: {test.registration}</p>
                      </div>
                      <button className="btn btn-primary mt-4 md:mt-0">
                        Register Now
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="flex items-center font-semibold text-blue-800 mb-2">
                    <Award className="h-5 w-5 mr-2" />
                    Scholarship Criteria
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
                      <span>90% and above marks: Up to 100% scholarship</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
                      <span>80% to 89%: Up to 75% scholarship</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
                      <span>70% to 79%: Up to 50% scholarship</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
                      <span>60% to 69%: Up to 25% scholarship</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Required Documents */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Required Documents</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Please ensure you have the following documents ready for submission during the admission process.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex items-start">
                    <FileText className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-yellow-800">
                    All documents must be original for verification. Photocopies will be retained by the college. 
                    International students need to provide additional documentation. Please contact the admission office for details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Online Application Form</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Fill out the application form below to start your admission process. Fields marked with * are required.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {submitted ? (
              <div className="bg-success bg-opacity-10 border border-success text-success p-8 rounded-lg text-center">
                <CheckCircle className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Application Submitted Successfully!</h3>
                <p className="mb-4">
                  Thank you for applying to Lord Buddha College & Success Institute. We have received your application 
                  and will contact you shortly to proceed with the next steps.
                </p>
                <p className="font-medium">
                  Your application reference number: APP-{Math.floor(100000 + Math.random() * 900000)}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary ${
                          formErrors.fullName ? 'border-error' : 'border-gray-300'
                        }`}
                        placeholder="Enter your full name"
                      />
                      {formErrors.fullName && (
                        <p className="mt-1 text-error text-sm">{formErrors.fullName}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary ${
                          formErrors.email ? 'border-error' : 'border-gray-300'
                        }`}
                        placeholder="example@email.com"
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-error text-sm">{formErrors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary ${
                          formErrors.phone ? 'border-error' : 'border-gray-300'
                        }`}
                        placeholder="10-digit phone number"
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-error text-sm">{formErrors.phone}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                        Gender *
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary ${
                          formErrors.gender ? 'border-error' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      {formErrors.gender && (
                        <p className="mt-1 text-error text-sm">{formErrors.gender}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary ${
                          formErrors.dob ? 'border-error' : 'border-gray-300'
                        }`}
                      />
                      {formErrors.dob && (
                        <p className="mt-1 text-error text-sm">{formErrors.dob}</p>
                      )}
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary ${
                          formErrors.address ? 'border-error' : 'border-gray-300'
                        }`}
                        placeholder="Your current address"
                      />
                      {formErrors.address && (
                        <p className="mt-1 text-error text-sm">{formErrors.address}</p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Parent/Guardian Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1">
                        Parent/Guardian Name *
                      </label>
                      <input
                        type="text"
                        id="parentName"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary ${
                          formErrors.parentName ? 'border-error' : 'border-gray-300'
                        }`}
                        placeholder="Parent/Guardian full name"
                      />
                      {formErrors.parentName && (
                        <p className="mt-1 text-error text-sm">{formErrors.parentName}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700 mb-1">
                        Parent/Guardian Phone
                      </label>
                      <input
                        type="tel"
                        id="parentPhone"
                        name="parentPhone"
                        value={formData.parentPhone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="10-digit phone number"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Program & Educational Background</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
                        Desired Program *
                      </label>
                      <select
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary ${
                          formErrors.program ? 'border-error' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select Program</option>
                        <option value="a-level">A-Level Bridge Course</option>
                        <option value="plus-two-science">+2 Science Bridge Course</option>
                        <option value="plus-two-management">+2 Management Bridge Course</option>
                        <option value="engineering">Engineering Diploma Entrance</option>
                        <option value="oa">O.A. Entrance Preparation</option>
                        <option value="staff-nurse">Staff Nurse Entrance Preparation</option>
                        <option value="pharmacy">Pharmacy Entrance Preparation</option>
                        <option value="ha">H.A. Entrance Preparation</option>
                      </select>
                      {formErrors.program && (
                        <p className="mt-1 text-error text-sm">{formErrors.program}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                        Highest Education Level *
                      </label>
                      <select
                        id="education"
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary ${
                          formErrors.education ? 'border-error' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select Education Level</option>
                        <option value="see">SEE/SLC</option>
                        <option value="plus-two">+2/Intermediate</option>
                        <option value="bachelors">Bachelor's Degree</option>
                        <option value="masters">Master's Degree</option>
                      </select>
                      {formErrors.education && (
                        <p className="mt-1 text-error text-sm">{formErrors.education}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="seeGrade" className="block text-sm font-medium text-gray-700 mb-1">
                        SEE/SLC GPA or Percentage
                      </label>
                      <input
                        type="text"
                        id="seeGrade"
                        name="seeGrade"
                        value={formData.seeGrade}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="e.g., 3.6 GPA or 75%"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="remarks" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information/Remarks
                  </label>
                  <textarea
                    id="remarks"
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Any additional information you would like to provide..."
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className={`h-5 w-5 mt-1 mr-2 text-primary focus:ring-primary ${
                        formErrors.agreeTerms ? 'border-error' : 'border-gray-300'
                      }`}
                    />
                    <label htmlFor="agreeTerms" className="text-sm text-gray-700">
                      I hereby declare that the information provided is true and correct. I also understand that any willful 
                      dishonesty may result in rejection of my application or dismissal. *
                    </label>
                  </div>
                  {formErrors.agreeTerms && (
                    <p className="mt-1 text-error text-sm ml-7">{formErrors.agreeTerms}</p>
                  )}
                </div>
                
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary min-w-[200px]"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Find answers to commonly asked questions about our admission process.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <h3 className="text-lg font-semibold flex items-center">
                        <HelpCircle className="h-5 w-5 text-primary mr-2" />
                        {faq.question}
                      </h3>
                      <span className="transition-transform duration-300 group-open:rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-5 w-5 text-gray-500">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Still have questions? Feel free to contact our admission office.</p>
              <div className="flex justify-center">
                <a href="/contact" className="btn btn-primary">Contact Admission Office</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionPage;