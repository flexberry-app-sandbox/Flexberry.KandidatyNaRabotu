package Kandidaty_na_rabotu.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kandidaty_na_rabotu.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: РегистАнкеты
 */
@Entity(name = "IISKandidaty_na_rabotuРегистАнкеты")
@Table(schema = "public", name = "РегистАнкеты")
public class RegistAnkety {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаРегистр")
    private Date датарегистр;

    @Column(name = "ФИОКандид")
    private String фиокандид;

    @Column(name = "СерНомПаспорта")
    private Integer серномпаспорта;

    @Column(name = "ИНН")
    private Integer инн;

    @Column(name = "Снилс")
    private Integer снилс;

    @Column(name = "НомерТелефона")
    private Integer номертелефона;

    @Column(name = "ЭлПочта")
    private String элпочта;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Organizaciya")
    @Convert("Organizaciya")
    @Column(name = "Организация", length = 16, unique = true, nullable = false)
    private UUID _organizaciyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Organizaciya", insertable = false, updatable = false)
    private Organizaciya organizaciya;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "VakantDolzhn")
    @Convert("VakantDolzhn")
    @Column(name = "ВакантДолжн", length = 16, unique = true, nullable = false)
    private UUID _vakantdolzhnid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "VakantDolzhn", insertable = false, updatable = false)
    private VakantDolzhn vakantdolzhn;


    public RegistAnkety() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаРегистр() {
      return датарегистр;
    }

    public void setДатаРегистр(Date датарегистр) {
      this.датарегистр = датарегистр;
    }

    public String getФИОКандид() {
      return фиокандид;
    }

    public void setФИОКандид(String фиокандид) {
      this.фиокандид = фиокандид;
    }

    public Integer getСерНомПаспорта() {
      return серномпаспорта;
    }

    public void setСерНомПаспорта(Integer серномпаспорта) {
      this.серномпаспорта = серномпаспорта;
    }

    public Integer getИНН() {
      return инн;
    }

    public void setИНН(Integer инн) {
      this.инн = инн;
    }

    public Integer getСнилс() {
      return снилс;
    }

    public void setСнилс(Integer снилс) {
      this.снилс = снилс;
    }

    public Integer getНомерТелефона() {
      return номертелефона;
    }

    public void setНомерТелефона(Integer номертелефона) {
      this.номертелефона = номертелефона;
    }

    public String getЭлПочта() {
      return элпочта;
    }

    public void setЭлПочта(String элпочта) {
      this.элпочта = элпочта;
    }


}