CREATE TABLE IF NOT EXISTS user_stats (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id           UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  exams_completed   INT DEFAULT 0,
  average_score     INT DEFAULT 0,
  exam_history      JSONB DEFAULT '[]',
  wrong_questions   JSONB DEFAULT '{}',
  studied_topics    JSONB DEFAULT '[]',
  updated_at        TIMESTAMPTZ DEFAULT NOW(),

  CONSTRAINT user_stats_user_id_unique UNIQUE (user_id)
);

-- Auto-update updated_at on row change
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_user_stats_updated_at ON user_stats;
CREATE TRIGGER trg_user_stats_updated_at
  BEFORE UPDATE ON user_stats
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
