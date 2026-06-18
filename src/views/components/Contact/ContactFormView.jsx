import useContactFormController from '../../../controllers/useContactFormController';
import SectionHeading from '../../shared/SectionHeading';
import Button from '../../shared/Button';
import Card from '../../shared/Card';
import Modal from '../../shared/Modal';
import { CalendarRange, Sparkles, Check } from 'lucide-react';

export const ContactFormView = () => {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isModalOpen,
    submissionData,
    closeModal,
    setValue,
    previouslyAttendedValue
  } = useContactFormController();

  return (
    <section id="contact" className="py-24 bg-bg-light relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header & Contact Details Block */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 mb-12 text-left">
          <div className="text-center lg:text-left max-w-xl">
            <SectionHeading
              title="Take The First Step Towards Healing"
              subtitle="Request A Consultation"
              align="left"
              className="lg:items-start items-center text-center lg:text-left"
            />
            <p className="text-sm md:text-base text-text-muted leading-relaxed mt-4">
              Your journey to self-discovery and recovery begins here. Fill out this confidential pre-evaluation form to request your diagnostic session.
            </p>
          </div>
          
          <div className="flex flex-col items-center lg:items-start gap-4 shrink-0 bg-primary/5 border border-primary/15 rounded-3xl p-6 w-full sm:w-80 lg:w-auto text-left shadow-sm">
            <div className="text-xs md:text-sm text-text-muted space-y-2.5">
              <p><strong>Email:</strong> <a href="mailto:support@hideoushealing.com" className="hover:text-primary transition-colors duration-300">support@hideoushealing.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+919876543210" className="hover:text-primary transition-colors duration-300">+91 98765 43210</a></p>
              <p><strong>Hours:</strong> Mon - Fri, 9 AM - 6 PM IST</p>
            </div>
            
            <div className="flex items-center gap-3 w-full pt-4 border-t border-primary/10 justify-center lg:justify-start">
              <a
                href="https://www.instagram.com/hideous_healing?igsh=MW1sNTVlcG5xbnlvMA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary/25 text-text-muted flex items-center justify-center transition-all duration-300 ease-out hover:scale-110 hover:text-primary hover:border-primary hover:shadow-[0_0_15px_rgba(213,164,78,0.4)] hover:bg-primary/5 cursor-pointer"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary/25 text-text-muted flex items-center justify-center transition-all duration-300 ease-out hover:scale-110 hover:text-primary hover:border-primary hover:shadow-[0_0_15px_rgba(213,164,78,0.4)] hover:bg-primary/5 cursor-pointer"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <Card
          variant="glass"
          hoverEffect={false}
          className="border border-primary/20 p-8 md:p-12 shadow-2xl bg-bg-light/85 backdrop-blur-md rounded-3xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Form Segment: Demographics */}
            <div className="border-b border-primary/10 pb-4 mb-4">
              <h3 className="text-lg font-bold font-serif text-text-dark flex items-center gap-2">
                <CalendarRange className="w-5 h-5 text-primary" />
                <span>1. Personal & Contact Profile</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col text-left">
                <label className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2 font-sans">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className={`px-4 py-3 rounded-xl border bg-bg-light/50 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all ${
                    errors.name ? 'border-red-500' : 'border-primary/25'
                  }`}
                  {...register('name')}
                />
                {errors.name && (
                  <span className="text-xs text-red-500 mt-1.5 font-sans font-medium">{errors.name.message}</span>
                )}
              </div>

              {/* Contact Number */}
              <div className="flex flex-col text-left">
                <label className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2 font-sans">
                  Contact Number
                </label>
                <input
                  type="text"
                  placeholder="+91 9876543210"
                  className={`px-4 py-3 rounded-xl border bg-bg-light/50 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all ${
                    errors.contactNumber ? 'border-red-500' : 'border-primary/25'
                  }`}
                  {...register('contactNumber')}
                />
                {errors.contactNumber && (
                  <span className="text-xs text-red-500 mt-1.5 font-sans font-medium">{errors.contactNumber.message}</span>
                )}
              </div>

              {/* Age */}
              <div className="flex flex-col text-left">
                <label className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2 font-sans">
                  Age
                </label>
                <input
                  type="number"
                  placeholder="25"
                  className={`px-4 py-3 rounded-xl border bg-bg-light/50 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all ${
                    errors.age ? 'border-red-500' : 'border-primary/25'
                  }`}
                  {...register('age')}
                />
                {errors.age && (
                  <span className="text-xs text-red-500 mt-1.5 font-sans font-medium">{errors.age.message}</span>
                )}
              </div>

              {/* Gender */}
              <div className="flex flex-col text-left">
                <label className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2 font-sans">
                  Gender
                </label>
                <select
                  className="px-4 py-3 rounded-xl border border-primary/25 bg-bg-light font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all cursor-pointer"
                  {...register('gender')}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && (
                  <span className="text-xs text-red-500 mt-1.5 font-sans font-medium">{errors.gender.message}</span>
                )}
              </div>
            </div>

            {/* Form Segment: Socio-Economics */}
            <div className="border-b border-primary/10 pb-4 mt-8 mb-4">
              <h3 className="text-lg font-bold font-serif text-text-dark flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span>2. Socio-Demographic Background</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Education */}
              <div className="flex flex-col text-left">
                <label className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2 font-sans">
                  Education
                </label>
                <input
                  type="text"
                  placeholder="Post Graduate"
                  className={`px-4 py-3 rounded-xl border bg-bg-light/50 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all ${
                    errors.education ? 'border-red-500' : 'border-primary/25'
                  }`}
                  {...register('education')}
                />
                {errors.education && (
                  <span className="text-xs text-red-500 mt-1.5 font-sans font-medium">{errors.education.message}</span>
                )}
              </div>

              {/* Occupation */}
              <div className="flex flex-col text-left">
                <label className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2 font-sans">
                  Occupation
                </label>
                <input
                  type="text"
                  placeholder="Software Engineer"
                  className={`px-4 py-3 rounded-xl border bg-bg-light/50 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all ${
                    errors.occupation ? 'border-red-500' : 'border-primary/25'
                  }`}
                  {...register('occupation')}
                />
                {errors.occupation && (
                  <span className="text-xs text-red-500 mt-1.5 font-sans font-medium">{errors.occupation.message}</span>
                )}
              </div>

              {/* Economic Status */}
              <div className="flex flex-col text-left">
                <label className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2 font-sans">
                  Economic Status
                </label>
                <input
                  type="text"
                  placeholder="Middle Income"
                  className={`px-4 py-3 rounded-xl border bg-bg-light/50 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all ${
                    errors.economicStatus ? 'border-red-500' : 'border-primary/25'
                  }`}
                  {...register('economicStatus')}
                />
                {errors.economicStatus && (
                  <span className="text-xs text-red-500 mt-1.5 font-sans font-medium">{errors.economicStatus.message}</span>
                )}
              </div>

              {/* Marital Status */}
              <div className="flex flex-col text-left">
                <label className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2 font-sans">
                  Marital Status
                </label>
                <select
                  className="px-4 py-3 rounded-xl border border-primary/25 bg-bg-light font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all cursor-pointer"
                  {...register('maritalStatus')}
                >
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                </select>
                {errors.maritalStatus && (
                  <span className="text-xs text-red-500 mt-1.5 font-sans font-medium">{errors.maritalStatus.message}</span>
                )}
              </div>

              {/* Family Type */}
              <div className="flex flex-col text-left">
                <label className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2 font-sans">
                  Family Type
                </label>
                <select
                  className="px-4 py-3 rounded-xl border border-primary/25 bg-bg-light font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all cursor-pointer"
                  {...register('familyType')}
                >
                  <option value="Nuclear Family">Nuclear Family</option>
                  <option value="Joint Family">Joint Family</option>
                </select>
                {errors.familyType && (
                  <span className="text-xs text-red-500 mt-1.5 font-sans font-medium">{errors.familyType.message}</span>
                )}
              </div>

              {/* Number of family members */}
              <div className="flex flex-col text-left">
                <label className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2 font-sans">
                  Number of Family Members
                </label>
                <select
                  className="px-4 py-3 rounded-xl border border-primary/25 bg-bg-light font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all cursor-pointer"
                  {...register('familyMembersCount')}
                >
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="4+">4+</option>
                </select>
                {errors.familyMembersCount && (
                  <span className="text-xs text-red-500 mt-1.5 font-sans font-medium">{errors.familyMembersCount.message}</span>
                )}
              </div>
            </div>

            {/* Form Segment: Clinical History & Concerns */}
            <div className="border-b border-primary/10 pb-4 mt-8 mb-4">
              <h3 className="text-lg font-bold font-serif text-text-dark flex items-center gap-2">
                <CalendarRange className="w-5 h-5 text-primary" />
                <span>3. Consultation History & Clinical Focus</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {/* Previously attended sessions */}
              <div className="flex flex-col text-left">
                <label className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2 font-sans">
                  Previously Attended Any Sessions?
                </label>
                <select
                  className="px-4 py-3 rounded-xl border border-primary/25 bg-bg-light font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all cursor-pointer"
                  {...register('previouslyAttended')}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {errors.previouslyAttended && (
                  <span className="text-xs text-red-500 mt-1.5 font-sans font-medium">{errors.previouslyAttended.message}</span>
                )}
              </div>

              {/* Conditional Previous Session Rating */}
              {previouslyAttendedValue === 'Yes' && (
                <div className="flex flex-col text-left bg-primary/5 p-5 rounded-2xl border border-primary/15 animate-fade-in">
                  <label className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2 font-sans">
                    Did Previous Sessions Match Your Expectations? (1 to 10 Stars)
                  </label>
                  <div className="flex flex-wrap gap-2.5 mt-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => setValue('previousMatchRating', rating)}
                        className="px-3 py-1.5 rounded-lg border border-primary/30 text-xs font-semibold hover:bg-primary hover:text-dark focus:bg-primary focus:text-dark transition-colors cursor-pointer"
                      >
                        {rating} ★
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Concerns Textarea */}
              <div className="flex flex-col text-left">
                <label className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2 font-sans">
                  Brief About Your Concerns
                </label>
                <textarea
                  rows="4"
                  placeholder="Please share what challenges you are currently facing (e.g. stress, relationship dynamics, emotional difficulties)..."
                  className={`px-4 py-3 rounded-xl border bg-bg-light/50 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all ${
                    errors.concerns ? 'border-red-500' : 'border-primary/25'
                  }`}
                  {...register('concerns')}
                />
                {errors.concerns && (
                  <span className="text-xs text-red-500 mt-1.5 font-sans font-medium">{errors.concerns.message}</span>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                variant="primary"
                className="w-full py-4 text-base font-bold tracking-wide uppercase rounded-2xl shadow-lg hover:shadow-glow"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full border-2 border-dark/20 border-t-dark animate-spin" />
                    <span>Booking Consultation...</span>
                  </div>
                ) : (
                  "Book Confidential Consultation"
                )}
              </Button>
            </div>

          </form>
        </Card>

        {/* Reusable Success Ticket Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title="Booking Consultation Success"
          size="md"
        >
          {submissionData && (
            <div className="flex flex-col items-center text-center p-2">
              <div className="w-16 h-16 rounded-full bg-green-100 border border-green-300 text-green-600 flex items-center justify-center mb-6 animate-bounce">
                <Check className="w-8 h-8" />
              </div>

              <h4 className="text-xl font-bold font-serif text-text-dark mb-2">
                Your Consultation Request has been Received
              </h4>
              
              <p className="text-xs md:text-sm text-text-muted max-w-md mb-8 leading-relaxed">
                Thank you for taking this important step. We have queued your request in our secure diagnostic database. A therapist will review it and contact you confidentially.
              </p>

              {/* Receipt Ticket */}
              <div className="w-full bg-bg-light border border-primary/25 rounded-2xl p-6 text-left font-mono text-xs text-text-dark relative overflow-hidden mb-6">
                <div className="absolute top-0 right-0 px-3 py-1 bg-primary/25 border-l border-b border-primary/30 text-[9px] font-sans font-bold tracking-wider uppercase text-primary-dark rounded-bl-xl">
                  CONFIDENTIAL
                </div>
                
                <h5 className="font-sans font-bold text-sm text-primary-dark uppercase border-b border-primary/15 pb-2 mb-4 tracking-wider">
                  HH CONSULTATION TICKET
                </h5>

                <div className="space-y-2.5">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Ticket ID:</span>
                    <span className="font-bold text-primary-dark">{submissionData.ticketId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Status:</span>
                    <span className="font-bold text-green-600">Pending Review</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Submitted At:</span>
                    <span>{new Date(submissionData.submittedAt).toLocaleString()}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-primary/10 text-[10px] text-text-muted italic leading-normal">
                  Note: Any personal details provided are stored securely and encrypted in alignment with patient confidentiality laws.
                </div>
              </div>

              <Button
                variant="primary"
                onClick={closeModal}
                className="px-8"
              >
                Close Ticket
              </Button>
            </div>
          )}
        </Modal>

      </div>
    </section>
  );
};

export default ContactFormView;
