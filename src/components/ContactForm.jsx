import { useLanguage } from '../context/LanguageContext.jsx';


export default function ContactForm() {
  const { t, placeholder } = useLanguage();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(t('formThanks'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" name="date" aria-label={placeholder('date')} title={placeholder('date')} />
      <input type="text" name="idNo" placeholder={placeholder('idNo')} aria-label={placeholder('idNo')} />
      <input type="text" name="srNo" placeholder={placeholder('srNo')} aria-label={placeholder('srNo')} className="full" />

      <input type="text" name="name" placeholder={placeholder('name')} aria-label={placeholder('name')} className="full" />
      <input type="text" name="fatherName" placeholder={placeholder('fatherName')} aria-label={placeholder('fatherName')} className="full" />

      <input type="date" name="dob" aria-label={placeholder('dob')} title={placeholder('dob')} />
      <input type="text" name="bloodGroup" placeholder={placeholder('bloodGroup')} aria-label={placeholder('bloodGroup')} />

      <div className="full" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <strong>{placeholder('sex')} :</strong>
        <label><input type="radio" name="sex" value="male" style={{ width: 'auto' }} /> {placeholder('male')}</label>
        <label><input type="radio" name="sex" value="female" style={{ width: 'auto' }} /> {placeholder('female')}</label>
        <label><input type="radio" name="sex" value="transgender" style={{ width: 'auto' }} /> {placeholder('transgender')}</label>
      </div>

      <textarea name="address" placeholder={placeholder('address')} aria-label={placeholder('address')} style={{ minHeight: '80px' }}></textarea>

      <input type="text" name="district" placeholder={placeholder('district')} aria-label={placeholder('district')} />
      <input type="text" name="policeStation" placeholder={placeholder('policeStation')} aria-label={placeholder('policeStation')} />

      <input type="text" name="aadhar" placeholder={placeholder('aadhar')} aria-label={placeholder('aadhar')} />
      <input type="text" name="cdc" placeholder={placeholder('cdc')} aria-label={placeholder('cdc')} />

      <input type="text" name="profession" placeholder={placeholder('profession')} aria-label={placeholder('profession')} />
      <input type="text" name="qualification" placeholder={placeholder('qualification')} aria-label={placeholder('qualification')} />

      <input type="tel" name="mobile" placeholder={placeholder('mobile')} aria-label={placeholder('mobile')} />
      <input type="text" name="position" placeholder={placeholder('position')} aria-label={placeholder('position')} />

      <input type="text" name="introducer" placeholder={placeholder('introducer')} aria-label={placeholder('introducer')} />
      <input type="text" name="contribution" placeholder={placeholder('contribution')} aria-label={placeholder('contribution')} />

      <button className="btn btn-primary full" type="submit">
        {placeholder('submitLabel')}
      </button>
    </form>
  );
}
