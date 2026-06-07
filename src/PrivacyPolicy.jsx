import React, { useEffect } from 'react';
import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <h1>Terms & Conditions and Privacy Policies</h1>
        <p className="last-updated">Last Updated: May 2025</p>

        <section>
          <h2>Medical Disclaimer</h2>
          <p>
            The information, content, tools, and features provided by Faby (the "Application") are intended solely for general informational and educational purposes. Nothing contained within this Application constitutes, or is intended to constitute, professional medical advice, diagnosis, treatment, or a substitute for consultation with a qualified and licensed healthcare provider.
          </p>
          <p>
            All developmental milestones, vaccination schedules, growth charts, nutritional guidance, and health-related content presented in the Application are based on general population data and publicly available pediatric guidelines. Individual results may vary significantly based on a child's unique health profile, genetic background, medical history, and other clinical factors that the Application cannot assess.
          </p>
          <p>
            You should always seek the advice of your child's physician, pediatrician, or other qualified health professional with any questions you may have regarding a medical condition, treatment, or health concern. Never disregard professional medical advice or delay seeking it because of information you have read or accessed through this Application.
          </p>
        </section>

        <section>
          <h2>Vaccine & Schedule Recommendations</h2>
          <p>
            The vaccination schedules and reminders displayed within this Application are derived from guidelines published by recognized public health authorities, including the World Health Organization (WHO) and relevant national immunization programs. These schedules are provided as a general reference only.
          </p>
          <p>
            Vaccination recommendations may differ based on your child's geographic location, individual health status, prior immunization history, and current public health advisories. The Application does not account for contraindications, allergies, or other individualized medical factors.
          </p>
          <p>
            Always consult a licensed medical professional or your child's designated pediatrician before administering, delaying, or modifying any vaccination schedule. Faby and its developers expressly disclaim all liability for any decisions made based on the vaccine-related content within this Application.
          </p>
        </section>

        <section>
          <h2>Growth & Developmental Data</h2>
          <p>
            Growth percentiles, weight and height tracking, and developmental milestone indicators presented in the Application are computed using standardized growth charts and reference data intended for general use. These metrics are informational tools and do not constitute clinical assessments.
          </p>
          <p>
            Deviation from average percentile ranges does not necessarily indicate a medical condition. Conversely, readings within normal ranges do not guarantee the absence of health issues. A qualified pediatric healthcare provider is the sole appropriate authority to interpret your child's growth and development in a clinical context.
          </p>
          <p>
            The Application's milestone tracking features are reference guides based on typical developmental windows. Children develop at individual rates; variation from these windows is common and does not, in isolation, indicate a developmental disorder or delay.
          </p>
        </section>

        <section>
          <h2>Data Privacy & Security</h2>
          <p>
            Faby collects and processes certain personal data, including but not limited to your child's name, date of birth, gender, weight, height, and health-related records, solely for the purpose of providing personalized features within the Application.
          </p>
          <p>
            We are committed to maintaining the confidentiality and security of your data in accordance with applicable data protection regulations. Your data is stored securely and is not sold, rented, or shared with third parties for commercial purposes without your explicit consent.
          </p>
          <p>
            By using the Application, you consent to the collection, storage, and processing of your data as described herein and in our Privacy Policy. You retain the right to request deletion of your personal data at any time by contacting our support team.
          </p>
        </section>

        <section>
          <h2>User Responsibilities</h2>
          <p>
            You are solely responsible for the accuracy and completeness of the information you input into the Application. Faby cannot verify the accuracy of user-submitted data and accepts no liability for errors arising from inaccurate or incomplete data entry.
          </p>
          <p>
            You agree to use the Application in a lawful manner and in accordance with these Terms and Conditions. Misuse, unauthorized access, reverse engineering, or any attempt to exploit the Application's systems is strictly prohibited and may result in immediate termination of your account and legal action where applicable.
          </p>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials. Any activity conducted through your account is your responsibility.
          </p>
        </section>

        <section>
          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, Faby, its developers, officers, employees, and affiliates shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising out of or related to your use of, or inability to use, the Application or its content.
          </p>
          <p>
            This includes, without limitation, any damages resulting from reliance on information provided by the Application, errors or omissions in the Application's content, or interruption or cessation of the Application's services.
          </p>
          <p>
            The Application is provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </p>
        </section>

        <section>
          <h2>Changes to These Terms</h2>
          <p>
            Faby reserves the right to modify, update, or replace these Terms and Conditions at any time, at our sole discretion. Changes will be effective immediately upon being posted within the Application or communicated to you via the contact information associated with your account.
          </p>
          <p>
            Your continued use of the Application following the posting of any changes constitutes your acceptance of the revised Terms and Conditions. We encourage you to review these Terms periodically to stay informed of any updates.
          </p>
          <p>
            If you do not agree with the revised Terms and Conditions, you must discontinue use of the Application immediately.
          </p>
        </section>

        <section>
          <h2>Governing Law & Contact</h2>
          <p>
            These Terms and Conditions shall be governed by and construed in accordance with applicable laws, without regard to its conflict of law provisions.
          </p>
          <p>
            If you have any questions, concerns, or disputes regarding these Terms and Conditions or the Application, please contact us through the in-app support feature or via our designated support channels. We are committed to resolving any concerns in a fair and timely manner.
          </p>
        </section>
      </div>
    </div>
  );
}
