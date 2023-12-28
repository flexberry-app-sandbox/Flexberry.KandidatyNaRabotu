package Kandidaty_na_rabotu.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kandidaty_na_rabotu.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Сотрудники
 */
@Entity(name = "IISKandidaty_na_rabotuСотрудники")
@Table(schema = "public", name = "Сотрудники")
public class Sotrudniki {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "IDСотруд")
    private Integer idсотруд;

    @Column(name = "ФИОСотр")
    private String фиосотр;

    @Column(name = "Должность")
    private String должность;


    public Sotrudniki() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getIDСотруд() {
      return idсотруд;
    }

    public void setIDСотруд(Integer idсотруд) {
      this.idсотруд = idсотруд;
    }

    public String getФИОСотр() {
      return фиосотр;
    }

    public void setФИОСотр(String фиосотр) {
      this.фиосотр = фиосотр;
    }

    public String getДолжность() {
      return должность;
    }

    public void setДолжность(String должность) {
      this.должность = должность;
    }


}