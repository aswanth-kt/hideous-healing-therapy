import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import contactFormSchema from '../models/schemas/contactFormSchema';
import submitConsultation from '../models/services/consultationService';

/**
 * Controller for the Consultation Contact Form.
 * Integrates React Hook Form with Zod schema verification,
 * manages sending overlays, and holds successful submission ticket details.
 */
export const useContactFormController = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submissionData, setSubmissionData] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      age: '',
      gender: 'Male',
      contactNumber: '',
      education: '',
      occupation: '',
      economicStatus: '',
      maritalStatus: 'Single',
      familyType: 'Nuclear Family',
      familyMembersCount: '3',
      previouslyAttended: 'No',
      previousMatchRating: 5,
      concerns: ''
    }
  });

  const previouslyAttendedValue = watch('previouslyAttended');

  const onSubmit = async (data) => {
    try {
      const response = await submitConsultation(data);
      if (response.success) {
        setSubmissionData(response);
        setIsModalOpen(true);
        reset();
      }
    } catch (error) {
      console.error("Submission error in controller:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
    isModalOpen,
    submissionData,
    closeModal,
    setValue,
    previouslyAttendedValue
  };
};

export default useContactFormController;
